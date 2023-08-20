import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Header from './components/SharedComponents/Header'
import Footer from './components/SharedComponents/Footer'


const poppins = Poppins({ subsets: ['latin'],weight:['300','200'] })


export default function RootLayout({
  children,
  
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{fontWeight:100}}>
        <main className='w-full min-h-screen flex flex-col mx-auto bg-togray   justify-between items-center   text-gray-800 '>
          <Header/>
          <div className='w-full h-full flex flex-grow flex-col justify-between items-center'>
          {children}

          </div>
          <Footer/>
          </main>
     
        
        </body>
    </html>
  )
}
