import React from 'react'
import Button from './Button'
import HeroBg from "@/assets/images/hero-bg.png"

const Hero = () => {
  return (
    <section className='pt-[9.5rem] lg:pt-[14.5rem] min-h-[452px] md:min-h-[556px]  lg:min-h-[780px]  relative '>
      <div 
        className="absolute z-10 top-0 w-full min-h-[442px] md:min-h-[556px] lg:min-h-[780px] bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroBg})`, backgroundPosition: 'top center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
      ></div>
      
        <div className='space-y-6 md:space-y-9 text-center container relative z-20 w-[100%] max-w-[25rem] md:max-w-[38rem]'>
            <div>
                <h1 className='cormorant-garamond  font-bold text-4xl md:text-6xl lg:text-8xl mb-2'>THE OAK</h1>

                <p className='text-base koho-regular'>The Oak Holdings is a consortium of companies specialising in Venture Capital, asset management, Real Estate and financial services.</p>
            </div>
            <Button text="GET MORE INFO"/>
        </div>

        {/* <div className='absolute bottom-0 h-[177px] bg-gradient-to-b from-[#2A2A2A4F] to-[#0C0C0D] z-20 w-full'>
      </div> */}
    </section>
  )
}

export default Hero