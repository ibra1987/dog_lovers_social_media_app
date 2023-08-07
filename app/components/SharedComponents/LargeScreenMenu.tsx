import Link from "next/link"
import { menulinks } from "@/links"
import { link } from "@/types"

const liClass =' text-gray-800  '
const linkClass = ' hover:text-gray-500 p-2 tracking-wider '
function LargeScreenMenu() {
  return (
    <nav className="hidden md:flex  w-1/3 p-2 ">
  <ul className="w-full flex   justify-end items-center space-x-4 px-2" >
    {menulinks.map((link:link,index:number)=>{
        return <li key={`${link.name}-${index}`}>
            <Link href={link.path} >{link.name}</Link>
        </li>
    })
    }
  </ul>
</nav>
  )
}

export default LargeScreenMenu