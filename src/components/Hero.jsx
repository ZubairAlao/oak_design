import React from 'react'
import Button from './Button'
import HeroBg from "@/assets/images/hero-bg.png"
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='home' className='pt-[9.5rem] lg:pt-[14.5rem] min-h-[452px] md:min-h-[556px]  lg:min-h-[780px]  relative'>
      <div 
        className="absolute z-10 top-0 w-full min-h-[442px] md:min-h-[556px] lg:min-h-[780px] bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})`, backgroundPosition: 'top center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      ></div>
      
        <div className='space-y-6 md:space-y-9 text-center container relative z-20 w-[100%] max-w-[25rem] md:max-w-[38rem] lg:max-w-[970px]'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="cormorant-garamond font-bold text-4xl md:text-6xl lg:text-8xl mb-2"
            >
              THE OAK
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-base md:text-2xl lg:text-3xl koho-regular"
            >
              The Oak Holdings is a consortium of companies specialising in Venture Capital, asset management, Real Estate and financial services.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button text="GET MORE INFO" />
          </motion.div>
        </div>

        {/* <div className='absolute bottom-0 h-[177px] bg-gradient-to-b from-[#2A2A2A4F] to-[#0C0C0D] z-20 w-full'>
      </div> */}
    </section>
  )
}

export default Hero