import React from 'react'
import WelcomeImg1 from "@/assets/images/welcome1.jpg"
import WelcomeImg2 from "@/assets/images/welcome2.jpg"
import headerLine from "@/assets/images/header-line.svg"

const Welcome = () => {
  return (
    <section className='pb-28 mt-12 relative z-20'>
        <div className='container space-y-5 md:flex justify-center items-start md:gap-9 lg:gap-16'>
           <div className='space-y-8 flex items-start justify-center flex-col md:w-[47%] md:max-w-[557px]'>
                <div>
                    <h3 className='text-base cormorant-garamond font-bold'>
                        Welcome to 
                        <span className='text-3xl block text-[#C5A675]'>THE OAKS HOLDINGS</span>
                    </h3>
                    <img src={headerLine} alt="line" />
                </div>
                <div className='space-y-5 lg:space-y-12 block'>
                    <p className='font-sizes font-normal'>
                        When we say we are your partner in building a more robust future, we mean it. Through years of experience and sectoral expertise, we've become one of the few industry leaders in the Real Estate, Venture Capital, and Digital Banking sectors.
                    </p>
                    <img src={WelcomeImg1} alt="welcome image" className='w-full'  />
                </div>
            </div>

            <div className='md:w-[39%] md:max-w-[327px] lg:max-w-[552px]'>
                <img src={WelcomeImg2} alt="" className='w-full md:min-h-[367px] lg:min-h-[542px] object-cover '/>
                <div className='font-semibold font-sizes md:space-y-0.5 mt-4'>
                    <p>THAT`S WHAT THE OAK ADVANTAGE IS ABOUT.</p>
                    <p className='kapakana text-[#AF885A]'>Olukayode Olusanya</p>
                    <p>CEO</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Welcome