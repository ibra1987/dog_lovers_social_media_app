import  { JwtPayload, VerifyErrors } from "jsonwebtoken"
import {jwtVerify} from "jose"

const secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : ""

export default async function tokenVerifier(token:string ){
    try {
      const result =  await jwtVerify(token, new TextEncoder().encode(secret));
    
      if(result.payload){
        return {
          success:true,
          user:result.payload
        }
      }
      
    } catch (error:any) {
      const devError = process.env.NODE_ENV === "development" ? error.message : null
      return {
        success:false,
        errors:['Invalid token',devError],
        
      }
    }
}