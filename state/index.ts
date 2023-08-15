import { User, loggedInUser } from "@/types";
import { create} from "zustand";
interface authState extends loggedInUser {

    setUser:(user:loggedInUser)=>void,
    logOutUser:()=>void

}

export const  useAuthState = create<authState>((set)=>({
    fullName:"",
    email:"",
    id:0,
    setUser:(user:loggedInUser)=> set((state)=>({
        ...state,
        email:user.email,
        fullName:user.fullName,
        id:user.id
    })),
    logOutUser:()=>set(state=>({
        ...state,
       email:"",
       fullName :"",
       id:0
    }))
}))

