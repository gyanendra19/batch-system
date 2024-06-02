import { RiMailFill, RiPhoneFill } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full pt-20">
        <div className="w-5/6 mx-auto">
          <div className="md:grid grid-cols-5 gap-4">
            <div className="flex flex-col gap-3">
              <div className="flex gap-1 items-center">
                <img className="h-6" src="./fire.png" alt="" />
                <h1 className="font-bold text-xl">uifry</h1>
              </div>
              <div className="flex gap-1 items-center">
                <RiMailFill color="#FF5555" />
                <h1 className="text-sm">help@frybix.com</h1>
              </div>
              <div className="flex gap-1 items-center">
                <RiPhoneFill color="#FF5555" />
                <h1 className="text-sm">+1 234 456 678 89</h1>
              </div>
            </div>

            <div className="flex flex-col mt-5 md:mt-0 gap-5 md:px-10">
              <h1 className="text-2xl font-bold">Links</h1>
              <p>Home</p>
              <p>About</p>
              <p>Bookings</p>
              <p>Blog</p>
            </div>

            <div className="flex flex-col mt-6 md:mt-0 gap-5 md:px-4">
              <h1 className="text-2xl font-bold">Legal</h1>
              <p>Terms of use</p>
              <p>Legal Policy</p>
              <p>Cookie Policy</p>
            </div>

            <div className="flex flex-col mt-6 md:mt-0 gap-5 md:px-4">
              <h1 className="text-2xl font-bold">Product</h1>
              <p>Live Chat</p>
              <p>Take Tour</p>
              <p>Reviews</p>
            </div>

            <div className="flex flex-col mt-6 md:mt-0 gap-5">
              <h1 className="text-2xl font-bold">Newsletter</h1>
              <p>Stay upto Date</p>
              <div className="flex">
                <input type="text" placeholder="Your Email" className="p-4 text-center focus:outline-none w-[120px]"/>
                <button className="px-7 py-2 bg-black text-white">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="pt-16 pb-6">
            <div className="h-[2px] bg-line-gradient w-full"></div>
            <p className="py-6 w-full text-center text-sm">Copyright 2022 uifry.com all rights reserved</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer