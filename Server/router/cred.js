const router = require('express').Router()
const { verifyToken, verifyTokenAndAuthorization } = require('../jwt_verifyToken')
const UserData = require('../models/User')
const Crypto = require('crypto-js')




router.get('/gett/:id', async (req, res) => {
    console.log('reqparams id***',req.params.id);
    try {
        const data = await UserData.findById(req.params.id)
        res.status(200).json(data)
        console.log('gettdata---',data);
    } catch (err) {
        res.status(500).json(err)
    }
})
router.delete('/dell/:id',async (req, res) => {
    console.log(req.params.id);
    try {
        await UserData.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/update/:id',verifyToken,verifyTokenAndAuthorization ,async (req, res) => {
    console.log("req body----", req.body);
    console.log("password old", req.body.password);

    if (req.body.password) {
        req.body.password = Crypto.AES.encrypt(req.body.password, process.env.CryptKey).toString()
    }

    try {
        const UpdateData = { ...req.body }
        console.log('password updated', UpdateData);
        const updateuser = await UserData.findByIdAndUpdate(req.params.id, {
            $set: UpdateData
        }, { new: true }
        )
        res.status(200).json(updateuser)
    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/getAll',async(req,res)=>{
    try{
const AllData=await UserData.find()
res.status(200).json(AllData)

    }catch(err){
        res.status(500).json(err)
    }
})
module.exports = router