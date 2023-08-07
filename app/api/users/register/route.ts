import { User } from "@/types";
import { UserSchema } from "@/zodScheams";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"

const saltRounds = 10;

export async function POST(request:Request){

const prisma = new PrismaClient()
 const newUser :User = await request.json()
  try {

    await UserSchema.parseAsync(newUser)
    const emailExists = await prisma.user.findFirst({
      where:{
        email:newUser.email
      }
    })
    if(emailExists){
      return new Response(JSON.stringify({
        status:400,
        addedUser:newUser,
        success:false,
        errors:[{
          path:["email"],
          message:"Email already in use"
        }]
      }),{
        status:400
      })
    }
    const hashedPassword = await bcrypt.hash(newUser.password,saltRounds)
    const addedUser  = await prisma.user.create({data:{
      fullName:newUser.fullName,
      email:newUser.email,
      password:hashedPassword,
      bio:""
    }})
   const {password,...returnedUser} = addedUser
    return new Response(JSON.stringify({
      success:true,
      status:201,
      newUser:returnedUser
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
