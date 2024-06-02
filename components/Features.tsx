import { Pages } from '@/utils/types';
import { RiNotification4Line, RiShiningLine } from '@remixicon/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

interface ComponentProps {
    setSelectedPage: Dispatch<SetStateAction<Pages>>;
  }

const Features = ({setSelectedPage} :ComponentProps) => {

    const premiumBox = (icon: string) => {
        return <>
          <div className="flex gap-2 items-center mt-4">
            <img className="h-4" src={`./${icon}.png`} alt="" />
            <h1 className="font-bold md:text-xl text-lg">Budgeting Intervals</h1>
          </div>
          <p className="w-5/6 md:text-md text-sm">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </>
      }
      
    return (
        <motion.div
        onViewportEnter={() => setSelectedPage(Pages.Features)}
        id='features' className="w-full relative">
                <Image src='/color-ellipse-1.png' alt='ellipse' width={200} height={200} className='absolute md:block hidden right-0 top-0'/>
            <motion.div
            initial = 'hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:50},
              visible: {opacity: 1, x:0}
            }}
            className="w-11/12 mx-auto md:mt-0 mt-8">
                <div className="flex md:flex-row flex-col items-center gap-6">
                    <Image width={600} height={600} className='md:block hidden' src="/feature-image-1.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <h2 className="text-color-primary">FEATURES</h2>
                        <h1 className="md:text-5xl text-3xl font-black mb-2">Uifry Premium</h1>
                        {premiumBox('icon-1')}
                        {premiumBox('icon-2')}
                        {premiumBox('icon-3')}
                    </div>
                </div>
            </motion.div>

            <motion.div
            initial = 'hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x:-50},
              visible: {opacity: 1, x:0}
            }}
            className="md:w-5/6 w-11/12 mx-auto md:mt-0 mt-6">
                <div className="flex md:flex-row flex-col items-center gap-1">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-color-primary">FEATURES</h2>
                        <h1 className="md:text-5xl text-2xl font-black mb-2">Why Choose Uifry?</h1>
                        <div className="flex gap-2 items-center mt-4">
                            <div className="p-2 bg-color-primary rounded-full"><RiNotification4Line color="white" size={16} /></div>
                            <h1 className="font-bold text-xl">Clever Notifications</h1>
                        </div>
                        <p className="">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                    <Image width={650} height={650} className='md:block hidden' src="/feature-image-2.png" alt="" />
                </div>
            </motion.div>


            <motion.div
            initial = 'hidden'
            whileInView='visible'
            viewport={{once: true, amount: 0.4}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, x: 50},
              visible: {opacity: 1, x: 0}
            }}
            className="w-11/12 mx-auto">
                <div className="flex md:flex-row flex-col items-center gap-1">
                    <Image width={650} height={650} src="/feature-image-3.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center mt-4">
                            <div className="p-2 bg-color-primary rounded-full"><RiShiningLine color="white" size={16} /></div>
                            <h1 className="font-bold text-xl">Fully Customizable</h1>
                        </div>
                        <p className="md:w-5/6">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Features