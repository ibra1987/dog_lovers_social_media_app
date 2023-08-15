"use client"
import AuthProvider from "@/helpers/authProvider"
import { useAuthState } from "@/state"
import RightSidebar from "./components/RightSidebar"
import LeftSidebar from "./components/LeftSidebar"
import MainFeed from "./components/MainFeed"
function page() {
    const appState =useAuthState()
  return (
     <div className="w-full flex justify-between items-start py-6">
     <LeftSidebar/>
     <MainFeed/>
     <RightSidebar/>
     </div>

  )
}

export default page