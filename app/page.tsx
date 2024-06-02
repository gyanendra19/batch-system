'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import { useState } from 'react';
import { Pages } from '@/utils/types';
import Gallery from '@/components/Gallery';
import Image from 'next/image';


export default function Home() {
  const [selectedPage, setSelectedPage] = useState(Pages.Home)
  const [overlay, setOverlay] = useState(false)
  const [lightImage, setLightImage] = useState('')

  return (
    <main className="w-full h-fit relative">
      <div onClick={() => setOverlay(false)} className={`w-full top-0 h-full bg-black opacity-45 z-[2000] absolute ${overlay ? '' : 'hidden'}`}></div>
      <div className={`fixed z-[2500] left-1/2 top-1/2 middle ${overlay ? '' : 'hidden'}`}>
        <Image src={`/${lightImage}.png`} alt=""  width={1000} height={1000}/>
      </div>

      <Navbar selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
      <Hero  setSelectedPage = {setSelectedPage}/>
      <Features setSelectedPage = {setSelectedPage}/>
      <Gallery setSelectedPage = {setSelectedPage} setOverlay = {setOverlay} setLightImage = {setLightImage}/>
      <Testimonial setSelectedPage = {setSelectedPage}/>
      <FAQ />
      <Subscribe setSelectedPage = {setSelectedPage}/>
      <Footer />
    </main>
  );
}
