import Link from 'next/link'
import { FaPaw } from 'react-icons/fa'

function Hero() {
  return (
    <section className='w-full flex flex-col justify-center items-center mt-36 '>
      
       <h1 className='w-full my-2 text-center font-extrabold tracking-wide text-2xl md:text-4xl lg:text-6xl text-gray-500'>Where Dog Lovers Unite</h1>
       
        <h2 className='w-2/5 flex justify-center items-center text-2xl my-4 font-bold'>
             <span className='text-[#eee68f]'>Woof </span><span className='text-xs text-gray-400 mx-2'><FaPaw/></span>{" "}
             <span className='text-[#adf0e5]'>Connect</span><span className='text-xs text-gray-400 mx-2'><FaPaw/></span>{" "}
            <span  className='text-[#f9b3e8]'>Love</span>
        </h2>
        <p className='w-11/12 md:w-2/5 text-gray-500 mx-auto text-sm py-4'>
        Unleash your love for dogs at PawsomeTails! 
         Connect with fellow dog enthusiasts, share adorable pup pics, and discover pawsitively delightful content. Join the canine lover's paradise now! </p>
      <div className='w-full flex flex-col justify-start items-center md:flex-row md:justify-center space-x-4'>
      <Link href={"/join"} className='text-center text-xl w-4/5 md:w-1/5 my-6 p-4 text-white font-bold rounded bg-blue-500  border-4 border-white hover:border-blue-600 hover:bg-white hover:text-blue-500 inset-2  transition duration-200 cursor-pointer '>
        Join the community now! 
        </Link>
       
      </div>

       
     
    </section>
  )
}

export default Hero