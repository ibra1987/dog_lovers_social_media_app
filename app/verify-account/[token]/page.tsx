"use client"
import axios from "axios"
import Link from "next/link"
import { useSearchParams,useRouter } from "next/navigation"
import { useEffect, useState } from "react"


function page() {
const params = useSearchParams()
const router = useRouter()
const token = params.get('token') || ""
const [isValidToken,setIsValidToken]=useState(false)

useEffect(()=>{
checkToken()

},[token])


const checkToken = async()=>{
  const res = await axios.post("/api/users/verify-email-token",{token},{headers:{"Content-Type":"application/json"}})
if(res.data.token){
  setIsValidToken(true)
}
}

isValidToken ? (
  <div className="h-scren flex justify-center items-center">You're account is now active, you can <Link className="text-bg-[#CDF0EA]" href={"/login"}>log in </Link ></div>
): router.push('/')

}

export default page