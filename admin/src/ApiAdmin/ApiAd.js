import axios from 'axios'
import { AdminLogdata,} from '../SliceAdm';
import { publicRequest} from '../RequestAdmin/ReqAd';



export const AdSignin = async (data,nav) => {
    console.log('data--', data);
    try {

        const response = await publicRequest.post("/subin/Admsign", data)
        console.log("success", response);
        nav('/')
        
    } catch (err) {
        console.log('error--', err);
    }
}




export const deleteAcc = async (data) => {
    console.log("dataaaa---",data);
    try {
        await publicRequest.delete(`/sk/dell/${data}`)
    } catch (err) {
        console.log('error--', err);
    }
}
// export const Updated=async (data,id)=>{
//     console.log("Updated fn--",data,id);
//     try{
        
// const upd=await publicRequest.put(`/sk/update/${id}`,data)
// console.log("update data",upd);
//     }catch(err){
//         console.log('error--', err);
//     }
// }
export const GetAll=async(dispatch)=>{
    try{
        const Alldata = await axios.get('http://localhost:5000/api/sk/getAll')
        
        console.log("apidata--",Alldata.data);
        // dispatch(AlldataSl(Alldata.data))
        return Alldata
    }catch(err){
        console.log('error--', err);
    }
}
export const AdLogin = async (dispatch, data) => {
    console.log('data Login--', data);
    try {

        const response = await publicRequest.post("/subin/Adverify", data)
        console.log("success", response);
        dispatch(AdminLogdata(response.data))
    } catch (err) {
        console.log('error--', err);
    }
}

export const GetAdmin=async()=>{
    try{
        const AllAdm = await axios.get('http://localhost:5000/api/subin/getAAdm')
        return AllAdm
    }catch(err){
        console.log('error--', err);
    }
}
export const delAdmin = async (data) => {
    console.log("dataaaa---",data);
    try {
        await publicRequest.delete(`/subin/dellAdm/${data}`)
    } catch (err) {
        console.log('error--', err);
    }
}

