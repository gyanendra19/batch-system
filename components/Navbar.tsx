import { Pages } from '@/utils/types'
import React, { Dispatch, SetStateAction, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { RiCloseLine, RiMenuLine } from '@remixicon/react'
import { ActionBtn } from '@/utils/shared'

interface ComponentProps {
  selectedPage: Pages
  setSelectedPage: Dispatch<SetStateAction<Pages>>;
}
const Navbar = ({ selectedPage, setSelectedPage }: ComponentProps) => {
  const [showNav, setShowNav] = useState(false)

  // Navbar Button Link function
  const NavBtn = ({ children }: { children: string }) => {
    const lowerCasePage = children.toLowerCase().replace(/ /g, "") as Pages
    return <AnchorLink
      className={selectedPage === lowerCasePage ? "text-color-primary" : ""}
      onClick={() => setSelectedPage(lowerCasePage)}
      href={`#${lowerCasePage}`}
    >
      {children}
    </AnchorLink>
  }

  return (
    <>
      <nav className="w-full py-6 z-[1000] fixed">
        <div className={`absolute left-0 z-[1500] bg-black h-screen w-[250px] text-white top-0 p-14 flex flex-col gap-6 ${showNav ? '' : 'hidden'}`}>
          <RiCloseLine onClick={() => setShowNav(false)} color='white' />
          <NavBtn>Home</NavBtn>
          <NavBtn>Features</NavBtn>
          <NavBtn>Gallery</NavBtn>
          <NavBtn>About Us</NavBtn>
          <NavBtn>Pricing</NavBtn>
        </div>
        <div className="w-5/6 mx-auto flex justify-between items-center relative">
          <div className="flex items-center md:gap-10 gap-2">
            <span onClick={() => setShowNav(true)} className='md:hidden'><RiMenuLine /></span>
            <div className="flex gap-1 items-center">
              <img src="./fire.png" alt="" />
              <h1 className="font-bold text-2xl">uifry</h1>
            </div>
            <div className="md:flex hidden gap-8 font-semibold">
              <NavBtn>Home</NavBtn>
              <NavBtn>Features</NavBtn>
              <NavBtn>Gallery</NavBtn>
              <NavBtn>About Us</NavBtn>
              <NavBtn>Pricing</NavBtn>
            </div>
          </div>

          <button className="px-7 hover:opacity-85 hover:scale-105 transition-all py-2 bg-black text-white">Download</button>

        </div>
      </nav>
    </>
  )
}

export default Navbar