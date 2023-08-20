import { Post} from "@/types";
import axios from "axios"
const postsUri = "/api/posts"



export const addPost =async(formdata:FormData)=>{
 const response = await axios.post(postsUri,formdata,{
   
    headers:{
        "Content-Type":"multipart/form-data"
    },
    
    
 })

 return response


}