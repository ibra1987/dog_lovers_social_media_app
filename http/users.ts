import { Credentials, User } from "@/types";
import axios from "axios"
const usersUri = "/api/users"

// @post register user
export const RegisterUser = async (user:User)=>{
   
        const response  = await axios.post(`${usersUri}/register`,user,{
            headers:{
                "Content-Type":"application/json"
            }
        })

        return response   
   
}

// login a user


export const LoginUser = async (user:Credentials)=>{
    const response = await axios.post(`${usersUri}/login`,user,{
        headers:{
            "Content-Type":"application/json"
        }
    })
    return response
}


