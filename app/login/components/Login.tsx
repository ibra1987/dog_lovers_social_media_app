"use client";
import InputComponent from "@/app/components/SharedComponents/InputComponent";
import { LoginUser } from "@/http/users";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import {useRouter} from 'next/navigation'
import { Credentials } from "@/types";
import { SingnInSchema } from "@/zodScheams";
import { useAuthState } from "@/state";

const inputClass ="w-full flex  p-2 outline-none  border border-gray-400 border-2"
const labelClass = " w-full mb-2  text-left text-black font-medium"
const inputDivClass = "w-full  p-2 flex flex-col  justify-center  items-center  "




  function Login() {
    const authState = useAuthState()
    const router = useRouter()
  const params = useSearchParams();
  const [loading,setLoading]=useState(false)
  const [credentials,setCredentials]=useState({
    email:{
        value:"",
        success:false,
        error:false,
        message:""
    },
    password:{
        value:"",
        success:false,
        error:false,
        message:""
    }
  })
  const success = params?.get("signup");

  const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
 const {name,value}=e.currentTarget

 setCredentials(prevState=>({
    ...prevState,
    [name]:{
      ...[name],
      success:true,
      error:false,
      message:"",
      value:value
    }
  })) 
 
  }

  const onSubmit= async(e:React.SyntheticEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    setCredentials(prevState=>({
        ...prevState,
        email:{
          ...prevState['email'],
          error:false,
          message:"",
         
        },
        password:{
            ...prevState['password'],
            error:false,
            message:""
        }
      })) 
    setLoading(true)

    try {
        const user :Credentials = {
            email:credentials.email.value.trim(),
            password:credentials.password.value.trim()
        }
        await SingnInSchema.parseAsync(user)
        const  response = await LoginUser(user)
        const data = response.data ||{}
        if(data?.success){
          authState.setUser(data.loggedInUser)
            router.push('/feed')
        }
        
    } catch (error:any) {
        const errors = error.errors ? error.errors : error.response?.data.errors ? error.response.data.errors : ""

        if(errors.length>0 && errors.length>0 && typeof errors !== 'string' || errors !instanceof String){

            errors.map((err:any)=>{
                const errorPath = err.path && err.path.length>0 ? err.path[0] :''
               if(credentials.hasOwnProperty(errorPath)){
                 const updatedProperty = errorPath as keyof typeof credentials;
     
                 setCredentials(prevState => ({
                   ...prevState,
                   [updatedProperty]: {
                     ...prevState[updatedProperty],
                     error: true,
                     success: false,
                     message: err.message 
                   }
                 }));
               } 
             })
                              
        }
        
    } finally{
        setLoading(false)
    }

 }
  return (
    <>
    {success === "1" && <div className="m-2 p-1 px-3 flex justify-normal items-center bg-emerald-50 text-emerald-600">Account successfuly created. You can log in now</div>}
      <form className="w-full  ">
        <div className={inputDivClass}>
          <InputComponent
            type="email"
            name="email"
            placeholder="Your email"
            cssClass={credentials.email.error ?   inputClass + " !border-red-500" : credentials.email.success ? inputClass +" !border-green-400" : inputClass}            label={true}
            handler={onChange}
            labelClass={labelClass}
            labelText="Your Email"
          />
            
        <div className="w-full flex justify-start items-center text-red-500">{ credentials.email.message}</div>

        </div>
        <div className={inputDivClass}>
          <InputComponent
            type="password"
            name="password"
            placeholder="Your password"
            cssClass={credentials.password.error ?   inputClass + " !border-red-500" : credentials.password.success ? inputClass +" !border-green-400" : inputClass}           
            label={true}
            handler={onChange}
            labelClass={labelClass}
            labelText="Password"
          />
                    <div className="w-full flex justify-start items-center text-red-500">{ credentials.password.message}</div>

        </div>
        <div className={"w-full p-2  "}>
          <button
          disabled={loading}
          onClick={onSubmit}
        className="w-full bg-yellow-400 m-2 p-2 cursor-pointer border border-white hover:border-yellow-400 text-white font-bold tracking-wider"
            type="button"
          >
              {loading ? "Processing" :" Login"}
          </button>
        </div>
      </form>
    </>
  );
}

export default Login;
