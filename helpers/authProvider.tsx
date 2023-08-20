"use client";
import React from "react";
import { useAuthState } from "@/state";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default  function AuthProvider({children}:{children:React.ReactNode}){
    const authState = useAuthState()

  return  authState.email? <> {children}</> : (
  <div className="min-h-screen flex justify-center items-center font-medium">
    You must be logged in to see this content<Link href={"/login"} className="mx-2 text-red-400">Log in</Link >
    </div>)
}