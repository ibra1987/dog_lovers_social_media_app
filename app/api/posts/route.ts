import { Post } from "@/types"
import { PrismaClient } from "@prisma/client"
import cloudUploader, { fileType } from "@/helpers/cloudUploader"
import { NextResponse } from "next/server"
import { UploadFileResponse } from "uploadthing/client"


export async function POST(request:Request){
    const formdata : FormData = await request.formData()
    //const prisma = new PrismaClient()
   const postContent : string = formdata.get('postContent') as string
   const postMedia  = formdata.getAll('postMedia') as File[]
  let mediaUrls :string[] | undefined = []
 
     
    
      if(!postContent){
        return new Response(JSON.stringify({

            success:false,
            errors:["No content posted"]
        }))
       } // end if no post
         
       
     try {
      if(postMedia.length > 0){
     
   
    const uploadResult  = await cloudUploader(postMedia)

  if(uploadResult.length && uploadResult[0].error === null){
     uploadResult.map((res)=>mediaUrls?.push(res.data!.url))
    }
  }
    return NextResponse.json({success:true})
  }
      
     } catch (error:any) {
  
    
      return NextResponse.json({
        error:error.message
      },{
        status:error?.response?.status
      })
      
     }
}