import { User,Credentials } from "@/types";
import { UserSchema,SingnInSchema } from "@/zodScheams";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {cookies} from "next/headers"

const saltRounds = 10;

export async function POST(request:Request){

const prisma = new PrismaClient()
 const signingInUser :Credentials = await request.json()
  try {

    await SingnInSchema.parseAsync(signingInUser)
    const user= await prisma.user.findFirst({
      where:{
        email:signingInUser.email
      }
    })
    //email does not exist
    if(!user){
      return new Response(JSON.stringify({
        status:400,
        success:false,
        errors:[{
          path:["email"],
          message:"There is no user with such email"
        }]
      }),{
        status:400
      })
    }

    const passwordMatch = signingInUser.password
    ? await bcrypt.compare(signingInUser.password, user.password)
    : false;
    
    //
    if(!passwordMatch){
        return new Response(JSON.stringify({
            status:400,
            success:false,
            errors:[{
              path:["password"],
              message:"invalid credentials, please check your password/email"
            },
            {
                path:["email"],
                message:""
              }
        ]
          }),{
            status:400
          })
    }

    const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : ""
    // validation passed => set session cookie
  const sessionToken = await jwt.sign({userId:user.id},secret,{expiresIn:'1h'})
  const {password,...loggedInUser}=user
  cookies().set('accessToken',sessionToken)
  return new Response(JSON.stringify({
    success:true,
    loggedInUser

  }))
    
  } catch (error:any) {
    return  new Response(JSON.stringify({
        success:false,
        errors:error.errors ? error.errors :  error.message ? [error.message]: "Someting went wrong!"
       
     }),{
      status:error.errors ? 400 : 500
     })
    
  }
}
