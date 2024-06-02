import { Pages } from '@/utils/types';
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

interface ComponentProps {
    setSelectedPage: Dispatch<SetStateAction<Pages>>;
}

const Testimonial = ({ setSelectedPage }: ComponentProps) => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
            transition={{duration: 0.3 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
            }}
            onViewportEnter={() => setSelectedPage(Pages.AboutUs)}
            id='aboutus' className="w-full py-10">
            <h1 className="w-full text-center font-medium">TESTIMONIAL</h1>
            <p className="w-[300px] mx-auto text-center md:text-4xl text-2xl font-black">What our users say about us?</p>

            <div className="w-11/12 mx-auto">
                <div className="flex md:flex-row flex-col items-center gap-1">
                    <Image width={650} height={650} src="/testimonial-main.png" alt="" />
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-xl w-5/6 md:w-[60%]">The Best Financial Accounting App Ever !</h1>
                        <p className="w-3/4">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                        <Image className="py-1" src='/testimonial-user.png' alt="user" width={150} height={150} />
                        <h1 className="font-medium">Nick Jonas</h1>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Testimonial