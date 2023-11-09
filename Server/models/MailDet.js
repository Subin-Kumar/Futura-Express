const mongoose=require('mongoose')

const MailerDet=new mongoose.Schema({
    
    email:{type:String,required:true},
    otp:{type:String,required:true},
    otpExpiration:{type:Date,required:true},
    
    
},{timestamps:true})

module.exports=mongoose.model('Mailer',MailerDet)