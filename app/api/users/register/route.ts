import { User } from "@/types";
import { UserSchema } from "@/zodScheams";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import { Client } from "@sendgrid/client";
import sgMail from "@sendgrid/mail";

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
    // hashing the password
    const hashedPassword = await bcrypt.hash(newUser.password,saltRounds)
    const addedUser  = await prisma.user.create({data:{
      fullName:newUser.fullName,
      email:newUser.email,
      password:hashedPassword,
      bio:""
    }})
    // generate a token and send email verifcation link
    const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : ""
    const sendgridkey = process.env.SENDGRID_API_KEY ? process.env.SENDGRID_API_KEY : ""

   const {password,...returnedUser} = addedUser
   const userId = returnedUser?.id ? returnedUser?.id :{}
   const emailToken = jwt.sign({id:userId},secret,{expiresIn:'1h'})
  
   sgMail.setClient(new Client())
   sgMail.setApiKey(sendgridkey)
   sgMail.setSubstitutionWrappers("{{", "}}")
   const emailVerificationLink = `https://imagebgremover.io/verify-account/${emailToken}`
   const send = await sgMail.send({
    from: "brahim.driouch@imagebgremover.io",
    to: `${addedUser.fullName} <${addedUser.email}>`,
    //cc: { name: "Some One", email: "someone@example.org" },
    subject: "imagebgremover.io - Account Activation",
    text: "Account Activation",
    html: `<p>please verify your account : <a href=${emailVerificationLink} target="_blank"> Activate Account</a></p>`
  })
  if(send){
    console.log("email sent")
  }

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
