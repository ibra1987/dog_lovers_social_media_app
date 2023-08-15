"use client";
import React from "react";
import { useAuthState } from "@/state";
import { useRouter } from "next/navigation";


export default  function AuthProvider({children}:{children:React.ReactNode}){
    const authState = useAuthState()

  return  authState.email? <> {children}</> : <>You must be logged in to see this content</>
}