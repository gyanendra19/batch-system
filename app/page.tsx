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


export default function Home() {
  const [selectedPage, setSelectedPage] = useState(Pages.Home)

  return (
    <main className="w-full h-full relative">
      <Navbar selectedPage = {selectedPage} setSelectedPage = {setSelectedPage}/>
      <Hero  setSelectedPage = {setSelectedPage}/>
      <Features setSelectedPage = {setSelectedPage}/>
      <Testimonial setSelectedPage = {setSelectedPage}/>
      <FAQ />
      <Subscribe setSelectedPage = {setSelectedPage}/>
      <Footer />
    </main>
  );
}
