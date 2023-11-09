import {createSlice} from '@reduxjs/toolkit'
const userdata=createSlice({
    name:'usData',
    initialState:{
        
        Pass:[]

    },
    reducers:{
      
        passdata:(state,action)=>{
        console.log("passdata--",action.payload);
       
            state.Pass.push(action.payload)
        },
        dataRemove:(state,action)=>{
            state.Pass=[]
        }
    }
})

export const {dataInfoE,dataRemove,passdata}=userdata.actions
export default userdata.reducer