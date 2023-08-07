"use client"
import Link from "next/link";
import {useState} from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineCloseCircle} from "react-icons/ai"
import { link } from "@/types";
import { menulinks } from "@/links";
const liClass ='w-full text-gray-200 my-2  '
const linkClass = 'w-full  hover:text-white p-2'
function SmallScreenMenu() {
    const [showMenu,setShowMenu]=useState(false)

    const toggleMenu= ()=>{
        setShowMenu(!showMenu)
    }
 return  showMenu ? (
    <nav className="w-1/3 p-4 relative md:hidden">
        <span onClick={toggleMenu} className="absolute cursor-pointer text-xl p-4 text-red-300 hover:text-red-500 top-0 right-0" ><AiOutlineCloseCircle/></span>
      <ul className="w-full text-sm flex flex-col justify-start items-end px-2" >
      {menulinks.map((link:link,index:number)=>{
        return <li key={`${link.name}-${index}`}>
            <Link href={link.path} >{link.name}</Link>
        </li>
    })
    }      </ul>
    </nav>
  ):<div onClick={toggleMenu} className="md:hidden cursor-pointer p-4 text-gray-600"><GiHamburgerMenu/></div>
  
}

export default SmallScreenMenu;
