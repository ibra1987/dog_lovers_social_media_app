"use client"
import axios from "axios"
import Link from "next/link"
import { useSearchParams,useRouter } from "next/navigation"
import { useEffect, useState } from "react"

type tokenVerificationResult = {
  isValid:boolean,
  msg?:string
}
function page({params}:{params:{token:string}}) {
const router = useRouter()
const {token} =params
const [tokenResult,setTokenResult]=useState<tokenVerificationResult>({isValid:false})

useEffect(()=>{
checkToken()

},[token])


const checkToken = async()=>{
  const res = await axios.post("/api/users/verify-email-token",{token},{headers:{"Content-Type":"application/json"}})
console.log(res)
  if(res.data?.result){
  
  setTokenResult(res.data?.result)
}
}

return <div className="h-screen flex justify-center items-start p-20">
  {
    tokenResult?.isValid && (
      <div className=" flex justify-center items-center text-xl">You're account is now active, you can <Link className="text-[#66ead4] mx-3 font-medium" href={"/login"}>log in </Link ></div>
    ) 
  }
  {
    !tokenResult.isValid && tokenResult?.msg && <div className=" flex flex-col justify-center items-center text-2xl font-medium">Invalid Token. <span>Return to the homepage <Link className="mx-2 text-[#81ecda]" href={"/"}>Home </Link ></span></div>
  }
   {
    !tokenResult.isValid && tokenResult?.msg === undefined && <div className=" flex flex-col justify-center items-center text-2xl font-medium">Validating token ... please wait</div>
  }
  

</div>

}

export default page