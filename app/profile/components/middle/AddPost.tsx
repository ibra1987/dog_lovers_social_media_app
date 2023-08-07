import InputComponent from "@/app/components/SharedComponents/InputComponent"
import Link from "next/link"
import { AiOutlineLink } from "react-icons/ai"
import { FaImage } from "react-icons/fa"


function AddPost() {
  return (
    <div className="w-full  bg-white rounded   p-2">

        <form className="w-full p-4">
           <InputComponent
           type="text"
           label={false}
           placeholder="What's in your mind today!"
           value=""
           cssClass="w-full p-4 bg-gray-100 outline-none rounded-full"
           />
        </form>
        <div className="w-full flex justify-between items-center  p-4">
            <div className="p-4 flex justify-start items-center text-gray-400 space-x-4 text-xl">
            <span className=" ">
            <FaImage/> 
            </span>
            <span>
                <AiOutlineLink/>
            </span>
            </div> 
          <button className="bg-blue-400 px-6 py-2 font-bold text-white rounded-full">
             Post
          </button>

        </div>

    </div>
  )
}

export default AddPost