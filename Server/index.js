const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')


dotenv.config()
app.use(cors())
const route=require('./router/auth')
const route2=require('./router/cred')

mongoose.connect(process.env.Mongodb_Url).then((data)=>{
    console.log('database connected');
    // console.log(data);
}).catch((err)=>{
    console.log('error',err);
})
app.use(express.json())
app.use('/api/subin',route)
app.use('/api/sk',route2)
app.listen(5000,()=>{
    console.log('port 5000 is connected');
})