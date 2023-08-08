import Link from "next/link"
import {FaPaw} from "react-icons/fa"

function SiteIdentity() {
  return (
    <div className=' w-1/2  flex  justify-start items-start md:items-center '>
      <span className=" text-2xl md:text-4xl text-[#F6C6EA] ">
        <Link className="" href={'/'}>
        PawsomeTails
        </Link>
       </span> <em className='text-[#f8dbf1] '>
    <FaPaw/>
</em>
    
</div>
  )
}

export default SiteIdentity