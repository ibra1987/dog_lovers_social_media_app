import { SingnInSchema, UserSchema } from "./zodScheams"
import {z} from "zod"

export type link ={
    name:string,
    path:string
}

export type inputProps={
    type:string,
    placeholder?:string,
    name?:string,
    cssClass:string,
    value?:string,
    label:boolean,
    labelText?:string,
    labelClass?:string,
    handler:(e:React.ChangeEvent<HTMLInputElement>)=>void

}
 export type Post = {
    postContent:string,
    postMedia:File[],
 }

export type User = z.infer<typeof UserSchema>
export type Credentials = z.infer<typeof SingnInSchema>
export type loggedInUser = {
    fullName:string,
    email:string,
    id:number
}
export type CreatedResponse<T> ={
    status:number,
    success:boolean,
    entity?:T | Partial<T>,
    message:string
}