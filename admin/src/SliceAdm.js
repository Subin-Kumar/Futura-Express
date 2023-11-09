import { createSlice } from '@reduxjs/toolkit'
const Admdata = createSlice({
    name: 'AdminData',
    initialState: {
        
        AdlogD:[]
    },
    reducers: {

        dataRemove: (state, action) => {
            state.AdlogD = []
        },
        AdminLogdata:(state,action)=>{
            console.log("passdata--",action.payload);
                state.AdlogD.push(action.payload)
            },
      
    }


})
export const { AlldataSl, SiData, dataRemove ,AdminLogdata,AdminDataremove } = Admdata.actions
export default Admdata.reducer