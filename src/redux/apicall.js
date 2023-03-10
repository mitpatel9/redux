import {updateStart,updateSuccess,updateError} from "./userSlice"
import axios from "axios";

export const upadteUser=async (user,dispatch)=>{
   dispatch(updateStart());
   try{
    //console.log(user)
    const res= await axios.post("http://localhost:8000/api/user/update",user)
    dispatch(updateSuccess(res.data))

   }catch(error){
    dispatch(updateError())
   }
}