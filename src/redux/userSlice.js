import { createSlice } from "@reduxjs/toolkit";

export const userSlice=createSlice({
    name:"user",
    initialState:{
        // name:'Mit',
        // email:"pateljohn@gmail.com"

        userInfo:{
            name:'Mit',
            email:"pateljohn@gmail.com"
        },
        pending:null,
        error:false,
    },
    reducers:{
        // update:(state,action)=>{
        //     state.name=action.payload.name;
        //     state.email=action.payload.email;
        // },
        // remove:(state)=> (state={}),

        updateStart:(state)=>{
            state.pending=true
        },
        updateSuccess:(state,action)=>{
            state.pending=false;
            state.userInfo=action.payload;
        },
        updateError:(state)=>{
            state.error=true;
            state.pending=false;
        }
        
    }
})

export const {update,remove,updateStart,updateSuccess,updateError}=userSlice.actions;
export default userSlice.reducer