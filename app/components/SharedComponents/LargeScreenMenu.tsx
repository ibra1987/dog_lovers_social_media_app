import Link from "next/link"
import { menulinks } from "@/links"
import { link } from "@/types"

const liClass =' text-gray-800  '
const linkClass = ' hover:text-gray-500 p-2 tracking-wider '
function LargeScreenMenu() {
  return (
    <nav className="hidden md:flex  w-1/3 p-2 ">
  <ul className="w-full flex   justify-end items-center space-x-8 px-2" >
    {menulinks.map((link:link,index:number)=>{
        return <>
        {link.name === "Sign Up" ? <li className="p-2 px-8 bg-[#CDF0EA] text-white rounded-full cursor-pointer hover:bg-[#b6f2e9] duration-100 transition " key={`${link.name}-${index}`}>
          <Link href={link.path} >{link.name}</Link>
        </li>:<li className="p-2 border-b border-white duration-200 transition hover:border-gray-200" key={`${link.name}-${index}`}>
          <Link href={link.path} >{link.name}</Link>
        </li>}
        </>
    })
    }
  </ul>
</nav>
  )
}

export default LargeScreenMenu