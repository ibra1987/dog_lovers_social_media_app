import {z} from "zod"


export const UserSchema = z.object({
    fullName:z.string({required_error:"Please enter your full name"}).min(4,{message:"Please enter your full name"}),
    email:z.string({required_error:"Please enter your email"}).email('Please enter a valid email'),
    password:z.string({required_error:"Please choose a password"}).min(7,{message:"Password must be at least 8 charaters long."}),
    passwordConfirmation:z.string({required_error:"Please confirm your password"}).min(7,{message:"Password must be at least 8 charaters long."}),
    bio:z.string().optional(),
}).superRefine(({password,passwordConfirmation},ctx)=>{
    if(password !== passwordConfirmation){
    ctx.addIssue({
        message:"Password do not match",
    code:"custom",
    path:['passwordConfirmation']
    })
}})

export   const SingnInSchema = z.object({
    email:z.string({required_error:"Please enter your emaim"}).email({message:"Please provide a valid email address"}),
    password:z.string({required_error:"Please enter your password"}).min(8,{message:"Password must be at least 8 characters"})
  })