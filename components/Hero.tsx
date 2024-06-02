import { ActionBtn } from '@/utils/shared';
import { Pages } from '@/utils/types';
import { RiPlayCircleLine } from '@remixicon/react'
import { motion } from 'framer-motion'
import React, { Dispatch, SetStateAction } from 'react'

interface ComponentProps {
  setSelectedPage: Dispatch<SetStateAction<Pages>>;
}

const Hero = ({setSelectedPage} : ComponentProps) => {
  return (
    <motion.div
    id='home'
    initial = 'hidden'
    whileInView='visible'
    viewport={{once: true, amount: 0.4}}
    transition={{duration: 0.5}}
    variants={{
      hidden: {opacity: 0, y:50},
      visible: {opacity: 1, y:0}
    }}
    onViewportEnter={() => setSelectedPage(Pages.Home)}
    className="pt-32 w-full">
      <div className="w-11/12 ml-auto">
        <div className="flex md:flex-row flex-col">

          <div className="basis-1/2 flex flex-col gap-6 relative">
            <div className="before:absolute before:hidden md:before:block before:-z-50 before:w-[200px] before:content-ellipse-hero before:-top-32 before:left-10">
              <h1 className="md:text-6xl text-2xl font-black">Make the Best Financial Decisions</h1>
            </div>
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div className="flex gap-6 text-sm">
              <ActionBtn text='Get Started' />
              <p className="flex gap-2 items-center font-medium "><span><RiPlayCircleLine /></span> Watch Video</p>
            </div>
            <img src="./strip.png" alt="" />
          </div>

          <div className="basis-1/2">
            <img className="md:-mt-14 relative z-[30]" src="./heroImage.png" alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Hero