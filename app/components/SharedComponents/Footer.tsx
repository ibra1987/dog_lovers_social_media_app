import { footerLinks } from "@/links"
import Link from "next/link";


const siteLinks = footerLinks.filter((link)=>link.group === "site_links");
const usersTerms = footerLinks.filter((link)=>link.group === "user-agreements-conditions")

function Footer() {
  return (
    <footer className="w-full flex justify-center items-center space-x-10 p-6  mt-6">
    <ul>
        {siteLinks.map((link,index)=>{
            return <li key={`${link.name}-${index}`}>
                    <Link href={`/${link.name}`}>{link.name} </Link>
            </li>
        })}
        </ul>
        <ul>
        {usersTerms.map((link,index)=>{
            return <li key={`${link.name}-${index}`}>
                 <Link href={`/${link.name}`}>{link.name} </Link>

            </li>
        })}
        </ul>
        

    </footer>
  )
}

export default Footer