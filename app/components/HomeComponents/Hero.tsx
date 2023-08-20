import Link from 'next/link'
import { FaPaw } from 'react-icons/fa'

function Hero() {
  return (
    <section className='w-full flex flex-col justify-center items-center mt-36 '>
      
       <h1 className='w-full my-2 text-center font-extrabold tracking-wide text-2xl md:text-4xl lg:text-6xl '>Where Dog Lovers Unite</h1>
       
        <h2 className='w-2/5 flex justify-center items-center text-2xl my-4 font-bold'>
             <span className='text-yellow-600'>Woof </span><span className='text-xs text-gray-400 mx-2'><FaPaw/></span>{" "}
             <span className='text-cyannish'>Connect</span><span className='text-xs text-gray-400 mx-2'><FaPaw/></span>{" "}
            <span  className='text-reddish'>Love</span>
        </h2>
        <p className='w-11/12 md:w-2/5 text-gray-500 mx-auto text-sm py-4'>
        Unleash your love for dogs at PawsomeTails! 
         Connect with fellow dog enthusiasts, share adorable pup pics, and discover pawsitively delightful content. Join the canine lover's paradise now! </p>
      <div className='w-full flex flex-col justify-start items-center md:flex-row md:justify-center space-x-4'>
      <Link href={"/join"} className='text-center text-xl w-4/5 md:w-1/5 my-6 p-4 font-bold rounded bg-reddish text-white  border-2 hover:underline border-white hover:border-reddish  hover:inset-xl  transition duration-200 cursor-pointer '>
        Join the community now! 
        </Link>
       
      </div>

       
     
    </section>
  )
}

export default Hero