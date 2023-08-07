"use client";
import { useAppState } from "@/app/store/store";


function Notification() {
  const appState = useAppState()
 
 
return appState.messages.length>0 ? <>
  {appState.messages.map((msg:string,index:number)=>{

    return <div className={appState.success ? "w-full bg-green-100 m-1 text-green-400 flex justify-start items-center px-1":"w-full flex justify-start items-center text-sm m-1 px-1 text-red-400"} key={`${index}-${msg}`}>{msg}</div>
  })}
</>: <></>
} 

export default Notification