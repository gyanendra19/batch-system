import { Pages } from '@/utils/types';
import { RiAppleFill } from '@remixicon/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

interface ComponentProps {
    setSelectedPage: Dispatch<SetStateAction<Pages>>;
  }

const Subscribe = ({setSelectedPage} :ComponentProps) => {
    return (
        <motion.div
        id='pricing'
        onViewportEnter={() => setSelectedPage(Pages.Pricing)}
        initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { scale: 0.8 },
                visible: { scale: 1 }
            }}
        className="w-full md:mt-20 md:mb-40 py-20 relative">
            <Image className="absolute -top-10 left-0 -z-10" src='/color-ellipse.png' alt="ellipse" width={400} height={400} />
            <div className="w-5/6 mx-auto flex md:pt-32 flex-col text-white gap-3 justify-center relative">
                <div className="before:absolute md:before:block before:hidden before:content-frame before:top-0 before:left-0 -z-10">
                    <img src="./frame.png" alt="" className='h-52 absolute -z-10' />
                    <div className="relative z-20 md:ml-16 gap-4 p-2">
                        <h1 className="md:text-5xl font-black">Ready To Get Started?</h1>
                        <p className="md:py-5 py-2 md:w-[45%] w-[67%]">Risus habitant leo egestas mauris diam eget morbi tempus vulputate.</p>
                        <button className="md:px-7 px-1 py-2 bg-white text-black font-medium flex gap-2 items-center">
                            <span>Download App</span>
                            <RiAppleFill />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Subscribe