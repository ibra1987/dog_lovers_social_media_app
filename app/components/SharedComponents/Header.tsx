import React from 'react'
import SiteIdentity from './SiteIdentity'
import SmallScreenMenu from './SmallScreenMenu'
import LargeScreenMenu from './LargeScreenMenu'

function Header() {
  return (
    <header className='w-full flex justify-between px-8 py-4 border-b   font-bold tracking-wider'>
       <SiteIdentity/>
       <SmallScreenMenu/>
       <LargeScreenMenu/>
       </header>
  )
}

export default Header