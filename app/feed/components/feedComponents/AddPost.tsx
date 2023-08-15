"use client";
import MediaUpload from "./MediaUpload";
import { useState } from "react";
import { Post } from "@/types";
const inputClass =
  " rounded-md p-2 bg-[#fcfbfb] outline-none break-words resize-none overflow-hidden font-medium";

function AddPost() {
  const [post,setPost]=useState<Post>({
    postContent:"",
    user:""
  })
  const [error,setError]=useState({
    path:"",
    msg:""
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement  >) => {
  
    const {name,value}=e.currentTarget;
    const files = e.target instanceof HTMLInputElement ? e.target.files  :undefined ;
  console.log(name)
    
    
     if(name ==="postContent" && value.length>150) {
      setError({
        path:"postContent",
        msg:"Posts can not be more than 150 characters"
      })
      return
     }

     if(name==="postImages"){
       
      if(files){
        const filesArray = Array.from(files) 
         const hasNoImage =filesArray.some((file:File)=>file.type.split('/')[0] !== "image") 
         
         if(hasNoImage){
          setError({
            path:"postImages",
            msg:"Please select images only"
          })
          return;
         }
      }
     }
     if(name === "postVideos"){
         if(files){
          const filesArray =Array.from(files)
          console.log(filesArray)
          const hasNoVideo =filesArray.some((file:File)=>file.type.split('/')[0] !== "video") 
           if(hasNoVideo){
            setError({
              path:"postVideos",
              msg:"Please select only videos"
            })
            return ;
           }
         }
     }
     setError({path:"",msg:""})
    setPost(prevState=>({
      ...prevState,
      [name]:value

    }))
  };

  return (
    <div className=" w-full p-2 flex flex-col justify-center items-center border rounded bg-white shadow-md">
      <form className="w-full flex flex-col space-y-2 justify-start">
        <textarea
          onChange={onChange}
          placeholder={"What do you have in mind today"}
          className={error.path === "postContent" ? inputClass + " !text-red-400" : inputClass}
          name="postContent"
        />
    <div className="w-full flex justify-start space-x-3">
      <div className="flex space-x-2">
      <MediaUpload name="postImages" handler={onChange} title="add Images" type="image" /> 
      </div>
      <div>
      <MediaUpload name="postVideos" handler ={onChange} title="add Video" type="video"  />

      </div>
    </div>
     
        <div className={error.msg.length >0 ? "w-full flex items-center justify-between" : "w-full flex items-center justify-end"}>
         
            {error && error.msg.length>0 &&  <span className="text-red-600 bg-red-50 p-2">{error.msg} </span>}
         
          <button
            className="bg-blue-500 hover:bg-blue-600 transition duration-200 p-2 px-6 rounded text-white font-medium"
            type="submit"
          >
            Publish
          </button>
         </div>
      </form>
    
    </div>
  );
}

export default AddPost;