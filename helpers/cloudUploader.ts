import { utapi } from 'uploadthing/server';




  export type fileType = "image" | "video" | "raw" | "auto" | undefined

  export default async function cloudUploader(files:File[]) {
        
         return await utapi.uploadFiles(files)
         

  }