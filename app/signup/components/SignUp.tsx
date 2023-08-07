"use client";
import InputComponent from "@/app/components/SharedComponents/InputComponent"
import { useState } from "react";
import { UserSchema } from "@/zodScheams";

const inputClass ="w-full flex  p-2 outline-none  border border-gray-400 border-2"
const labelClass = " w-full mb-2  text-left text-black font-medium"
const inputDivClass = "w-full  p-2 flex flex-col  justify-center  items-center  "
import { RegisterUser } from "@/http/users";
import { useRouter } from "next/navigation";

function SignUp() {
  
  const router = useRouter()
  const [loading,setLoading]=useState(false)
  const [user,setUser]=useState({
  fullName:{
    value:"",
    error:false,
    success:false,
    message:"",


  },
  email:{
    value:"",
    error:false,
    success:false,
    message:"",

  },
  password:{
    value:"",
    error:false,
    success:false,
    message:"",

  },
 passwordConfirmation:{
  value:"",
  error:false,
  success:false,
  message:"",

 }
})



 // handle on change event
  const onChange=async (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name,value} =  e.currentTarget     

    //set user based on input
    setUser(prevState=>({
      ...prevState,
      [name]:{
        ...[name],
        success:true,
        error:false,
        message:"",
        value:value
      }
    })) 


    // // extract values for validation
    // const newUser = {
    //   fullName:user.fullName.value.trim(),
    //   email:user.email.value.trim(),
    //   password:user.password.value.trim(),
    // passwordConfirmation:user.passwordConfirmation.value.trim()
    //  }

     //perform validation on the fly
  
    }
    
  

  //handle form submission

  const handleSubmit = async (e:React.SyntheticEvent<HTMLButtonElement>)=>{
     e.preventDefault();
    setLoading(true)
     try {
      const newUser = {
        fullName:user.fullName.value,
        email:user.email.value,
        password:user.password.value,
      passwordConfirmation:user.passwordConfirmation.value
       }
      await UserSchema.parseAsync(newUser)
      const response  = await RegisterUser(newUser)
      if(response?.data?.success){
        router.push('/login?signup=1')

      }
     } catch (error:any) {

   const errors = error.errors ? error.errors : error.response?.data.errors ? error.response.data.errors : ""
      if(errors.length>0 && typeof errors !== 'string' || errors !instanceof String){
        errors.map((err:any)=>{
           const errorPath = err.path && err.path.length>0 ? err.path[0] :''
          if(user.hasOwnProperty(errorPath)){
            const updatedProperty = errorPath as keyof typeof user;

            setUser(prevUser => ({
              ...prevUser,
              [updatedProperty]: {
                ...prevUser[updatedProperty],
                error: true,
                success: false,
                message: err.message 
              }
            }));
          } 
        })
      }
     }
     finally{
      setLoading(false)
     }
  }

  
  return (
<div className="w-full md:w-4/5 rounded p-4 flex flex-col justify-center  bg-white my-10 shadow-lg border">
        <h1 className="text-4xl text-blue-400 text-center font-extrabold ">
          Create a new account
        </h1>
      <form  className="w-full flex flex-col justify-center">
        <div className={inputDivClass}>
          <InputComponent
          type="text"
          value={user.fullName.value}
          name="fullName"
          placeholder="Your full name"
          cssClass={user.fullName.error ?   inputClass + " !border-red-500" : user.fullName.success ? inputClass +" !border-green-400" : inputClass}
          label={true}
          handler={onChange}
          labelClass={labelClass}
          labelText="Full name"
          />
          <div className="w-full flex justify-start items-center text-red-500">{ user.fullName.message}</div>
          </div>
          <div className={inputDivClass}>
          <InputComponent
          type="email"
          name="email"
          value={user.email.value}
          placeholder="Your email"
          cssClass={user.email.error ?  inputClass + "  !border-red-500" : user.email.success ? inputClass +"  !border-green-400" : inputClass}
          label={true}
          handler={onChange}
          labelClass={labelClass}
          labelText="Your Email"
          />
                  <div className="w-full flex justify-start items-center text-red-500">{ user.email.message}</div>

          </div>
          <div className={inputDivClass}>
          <InputComponent
          type="text"
          name="password"
          value={user.password.value}
          placeholder="Password"
          cssClass={user.password.error ? inputClass + "  !border-red-500" : user.password.success ? inputClass +"  !border-green-400" : inputClass}
          label={true}
          handler={onChange}
          labelClass={labelClass}
          labelText="Password"
          />
                  <div className="w-full flex justify-start items-center text-red-500">{ user.password.message}</div>

          </div>
          <div className={inputDivClass}>
          <InputComponent
          type="text"
          name="passwordConfirmation"
          value={user.passwordConfirmation.value}
          placeholder="Conifrm password"
          cssClass={user.passwordConfirmation.error ? inputClass + "  !border-red-500" : user.passwordConfirmation.success ? inputClass +"  !border-green-400" : inputClass }
          label={true}
          handler={onChange}
          labelClass={labelClass}
          labelText="Confirm password"
          />
                  <div className="w-full flex justify-start items-center text-red-500">{ user.passwordConfirmation.message}</div>

          </div>
          <div className={"w-full p-2  "}>
            <button
             type="button"
             disabled={loading}
              onClick={handleSubmit} 
             className="w-full bg-yellow-400 m-2 p-2 cursor-pointer border  border-white hover:border-yellow-400 text-white font-bold tracking-wider">
              {loading ? "Processing" :" Sign Up"}
              </button>

          </div>
      </form>

    </div>  )

}


export default SignUp;