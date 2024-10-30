import React from 'react'
import HeaderLine from "@/assets/images/header-line.svg"
import CapitalBg from "@/assets/images/capital-bg.jpg"

import { OakCapitalList } from '../constants'

const OakCapital = () => {
  return (
    <section className='py-12 md:pt-[128px] md:pb-[93px]'>
        <div className="container space-y-20">
            <div className='md:flex gap-6'>
                <div className='space-y-6 md:w-[42%] lg:w-full lg:flex justify-between lg:flex-row-reverse'>
                    <div className='lg:flex flex-col lg:w-[70%] lg:max-w-[763px] lg:ml-8'>
                        <div className=''>
                            <h3 className='text-[32px] text-[#C5A675] cormorant-garamond font-bold'>
                                THE OAK CAPITAL
                            </h3>
                            <img src={HeaderLine} alt="line"  className=''/>
                        </div>
                        <p className='hidden lg:block mt-8 font-sizes'>
                            The Oak Capital is a venture capital management firm established for making outstanding investment deals in Sub-Saharan Africa, with a bias for businesses driving technological innovations, financial inclusion, healthcare services, and agriculture.
                            <span className='block'>Our strategy is to be positioned as the go-to investor for founders with groundbreaking solutions to problems in Africa.</span>
                        </p>
                    </div>

                    <p className='md:hidden font-sizes'>
                        The Oak Capital is a venture capital management firm established for making outstanding investment deals in Sub-Saharan Africa, with a bias for businesses driving technological innovations, financial inclusion, healthcare services, and agriculture.
                        <span className='block'>Our strategy is to be positioned as the go-to investor for founders with groundbreaking solutions to problems in Africa.</span>
                    </p>

                    <div className='grid grid-cols-4 md:grid-cols-2 gap-2 justify-start items-center md:max-w-[350px] lg:max-w-[396px] lg:h-[196px]'>
                        {OakCapitalList.map((list, index) => (
                            <div key={index} className='flex items-center justify-center gap-2 md:gap-4 border-[0.5px] border-[#9F8449] rounded-sm p-1.5 md:p-2 w-full lg:max-w-[182px] min-h-[82px]'>
                                <div className='w-[19px] h-[19px] md:w-[40px] md:h-[40px] bg-[#333333] rounded-full flex items-center justify-center'>
                                    <img src={list.image} alt={list.label} className='w-[10px] h-[10px] md:w-[21px] md:h-[21px]' />
                                </div>
                                <p className='w-[80%] text-[8px] md:text-[12px] leading-tight m-0'>{list.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <p className='md:block lg:hidden hidden md:w-1/2 lg:w-[58%] lg:max-w-[774px] text-[14px] md:text-[16px] lg:text-[20px]'>
                    The Oak Capital is a venture capital management firm established for making outstanding investment deals in Sub-Saharan Africa, with a bias for businesses driving technological innovations, financial inclusion, healthcare services, and agriculture.
                    <span className='block'>Our strategy is to be positioned as the go-to investor for founders with groundbreaking solutions to problems in Africa.</span>
                </p>
            </div>

            <div className='md:h-[350px] lg:min-h-[512px] w-full flex items-center justify-center'>
                <img src={CapitalBg} alt="capital bg" className='w-full h-full object-cover object-center' />
            </div>
        </div>
    </section>
  )
}

export default OakCapital