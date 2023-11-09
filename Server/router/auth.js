const router = require('express').Router()
const UserData = require('../models/User')
const AdminData = require('../models/Admin')
const Crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const multer=require('multer')
const nodemailer=require('nodemailer')
const mailer=require('../models/MailDet')
const dotenv=require('dotenv')
dotenv.config()



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/Images')
    },
    filename: function (req, file, cb) {
            cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })



router.post("/sign",upload.single('image') ,async (req, res) => {
    console.log("req-body--", req.body);
    console.log("req-file--", req.file);
    try {
        req.body.password = Crypto.AES.encrypt(req.body.password, process.env.CryptKey).toString()
        const newData = new UserData({
            username:req.body.username,
            email:req.body.email,
            age:req.body.age,
            address:req.body.address,
            image:req.file.originalname,
            password:req.body.password
        })
        const saveData = await newData.save()
        res.status(200).json(saveData)

    } catch (err) {
        res.status(500).json(err)
    }

})


router.post('/verify', async (req, res) => {
    
    try {
        const Dbd = await UserData.findOne({ email: req.body.emaillog })
        console.log("Dbd---",Dbd);
        !Dbd && res.status(401).json('Please check your email')

        const Hp = Crypto.AES.decrypt(Dbd.password, process.env.CryptKey)
        const Op = Hp.toString(Crypto.enc.Utf8)
        console.log(Op);
        console.log("password check==", Op, req.body.passwordlog);
        Op != req.body.passwordlog && res.status(401).json('Password and email are not match')

        const accesstoken = jwt.sign({
            id: Dbd._id
        }, process.env.JwtKey, { expiresIn: '1d' })
        console.log(accesstoken);
        const { password, ...others } = Dbd._doc
        res.status(200).json({ ...others, accesstoken })


    } catch (err) {
        res.status(500).json(err)
    }
})


const Admstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../admin/public/Imagess')
    },
    filename: function (req, file, cb) {
            cb(null, file.originalname)
    }
  })

const Adupload=multer({storage:Admstorage})

router.post("/Admsign",Adupload.single('images') , async (req, res) => {
    console.log("req-body--", req.body);
    console.log("req-file--", req.file);
    try {
        req.body.password = Crypto.AES.encrypt(req.body.password, process.env.CryptKey).toString()
        const AdnewData = new AdminData({
            username:req.body.username,
            email:req.body.email,
            age:req.body.age,
            address:req.body.address,
            image:req.file.originalname,
            password:req.body.password
        })
        const AdsaveData = await AdnewData.save()
        res.status(200).json(AdsaveData)

    } catch (err) {
        res.status(500).json(err)
    }

})
router.post('/Adverify', async (req, res) => {
    console.log("request.body===",req.body);
    try {
        const AdDbd = await AdminData.findOne({email:req.body.emaillog})
        console.log("ADbd====",AdDbd);
        !AdDbd && res.status(401).json('Please check your email')

        const Hp = Crypto.AES.decrypt(AdDbd.password, process.env.CryptKey)
        const Op = Hp.toString(Crypto.enc.Utf8)
        console.log(Op);
        console.log("password check==", Op, req.body.passwordlog);
        Op != req.body.passwordlog && res.status(401).json('Password and email are not match')

        const accesstoken = jwt.sign({
            id: AdDbd._id
        }, process.env.JwtKey, { expiresIn: '1d' })
        console.log(accesstoken);
        const { password, ...others } = AdDbd._doc
        res.status(200).json({ ...others, accesstoken })

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/getAAdm',async(req,res)=>{
    try{
const AllAData=await AdminData.find()
res.status(200).json(AllAData)

    }catch(err){
        res.status(500).json(err)
    }
})

router.delete('/dellAdm/:id',async (req, res) => {
    console.log(req.params.id);
    try {
        await AdminData.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})


const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.NMmail,
        pass:process.env.NMpass
    }
})



function generateOTP(){
    return Math.floor(1000+Math.random()*9000).toString()
}

router.post('/otpSnd',async (req,res)=>{
    console.log("OTP--ReqBody",req.body);
    const email=req.body.FMail

    console.log("Req body email",email);

    const otp=generateOTP()

    const otpExpiration=new Date(Date.now()+3*60*1000)

    console.log('Otpdata---',otp,otpExpiration,email);

    const user=new mailer({
        email,otp,otpExpiration
    })
    try{
       const ud=await user.save()

       const mailOptions={
        from:process.env.NMmail,
        to:email,
        subject:'Your OTP Code',
        text:`Your Otp code is :${otp}`
       }
       const info=await transporter.sendMail(mailOptions)
       return res.status(200).json({msg:'Otp is successfully snd',otp})
    }
    catch(err){
        return res.status(500).json("error")
    }
})



module.exports = router