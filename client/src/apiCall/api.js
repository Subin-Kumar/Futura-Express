import axios from 'axios'
import { dataInfoE, dataRemove, passdata } from '../Slice';
import { publicRequest, userRequest } from '../Rqst/RequestMeth';


export const Signin = async (data) => {
    console.log('data--', data);
    try {

        const response = await publicRequest.post("/subin/sign", data)
        console.log("success", response);
    } catch (err) {
        console.log('error--', err);
    }
}

export const getdata = async (dispatch) => {
    try {
        const gdata = await axios.get('http://localhost:5000/api/subin/gett')
        console.log(gdata);
        dispatch(dataInfoE(gdata))

    } catch (err) {
        console.log('error-- get', err);
    }
}

export const LoginF = async (dispatch, data) => {
    console.log('data Login--', data);
    try {

        const response = await publicRequest.post("/subin/verify", data)
        console.log("success", response);
        dispatch(passdata(response.data))
    } catch (err) {
        console.log('error--', err);
    }
}

export const deleteAcc = async (data,nav,dispatch) => {
    console.log("dataaaa---",data);
    try {
        await userRequest.delete(`/sk/dell/${data}`)
        dispatch(dataRemove())
        nav('/')
    } catch (err) {
        console.log('error--', err);
    }
}

export const Updated=async (data,id,nav)=>{
    console.log("Updated fn--",data,id);
    try{
        
const upd=await userRequest.put(`/sk/update/${id}`,data)
console.log("update data",upd);
nav('/')

    }catch(err){
        console.log('error--', err);
    }
}

export const getUser=async(id)=>{
    console.log('get user id',id);
    try{
const duser=await userRequest.get(`/sk/gett/${id}`)
console.log('duser0--',duser);

return duser
    }catch(err){
        console.log('error--', err);
    }
}

export const OtpSnd=async(id)=>{
    console.log("FID==",id);
    try{
        const oSND=await publicRequest.post(`/subin/otpSnd`,id)
        console.log('oSND',oSND);
    }
    catch(err){
        console.log('error--', err);
    }
   
}


