import { Pages } from '@/utils/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'

interface ComponentProps {
    setSelectedPage: Dispatch<SetStateAction<Pages>>;
    setLightImage : Dispatch<SetStateAction<string>>
    setOverlay: Dispatch<SetStateAction<boolean>>
  }

const Gallery = ({setSelectedPage, setLightImage, setOverlay}: ComponentProps) => {
    const galleryPhoto = ['gallery-1', 'gallery-2', 'gallery-3', 'gallery-4']

    const handleGallery = (photo: string) => {
        setOverlay(true)
        setLightImage(photo)
    }

    return (
        <motion.div
        id='gallery'
        onViewportEnter={() => setSelectedPage(Pages.Gallery)}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: { scale: 0.8 },
                visible: { scale: 1 }
            }}
            className='w-full py-10'>
            <h1 className='w-full text-center text-4xl font-bold'>App Gallery</h1>
            <div className='md:w-5/6 w-11/12 mx-auto md:grid grid-cols-2 gap-8 mt-9 gap-y-4 px-6'>
                {galleryPhoto.map(photo => (
                    <Image onClick={() => handleGallery(photo)} className='shadow-2xl mt-4 md:mt-0 cursor-pointer' src={`/${photo}.png`} alt='gallery-1' width={500} height={500} />
                ))}
            </div>
        </motion.div>
    )
}

export default Gallery