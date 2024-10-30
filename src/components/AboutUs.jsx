import React from 'react';
import { aboutPicFirstRow, aboutPicSecondRow } from '../constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import headerLine from "@/assets/images/header-line.svg";

const AboutUs = () => {
    const options = {
        type: 'loop',
        gap: '2.5rem',
        resetProgress: false,
        width: "100%",
        rewind: true,
        perPage: 4,
        perMove: 1,
        rewindSpeed: 3000,
        arrows: false,
        pagination: false,
        drag: 'free',
        breakpoints: {
            1024: { perPage: 4, gap: '2rem' },
            820: { perPage: 3, gap: '2rem' },
            576: { perPage: 2, gap: '2rem' },
        },
    };

    return (
        <section className='bg-[#1B1A1A] py-14'>
            <div className='space-y-9'>
                <div className="container text-center space-y-4">
                    <div className='flex items-center flex-col'>
                        <h3 className='text-base cormorant-garamond font-bold'>
                            What we do
                            <span className='text-3xl block text-[#C5A675]'>THE OAK HOME</span>
                        </h3>
                        <img src={headerLine} alt="line" className='block' />
                    </div>
                    <p className='font-sizes md:w-[75%] md:max-w-[623px] lg:w-[68%] lg:max-w-[987px] mx-auto '>
                        Oak Homes is a leading Real Estate Development company with its primary business in Lagos, Nigeria and recently made a foray into the United Kingdom and the United States. Our value chain business with an intention to backward integrate includes Facility management, Construction and Infrastructure Development companies within the Group Business. We pride ourselves as being an innovative and creative team, with combined experience spanning over four (4) decades.
                        <span className='block'>-</span>
                        We pride ourselves as lovers of art and creating masterpieces of Real Estate Portfolio.
                    </p>
                </div>

                <div className='space-y-8'>
                <Splide className='flex items-center justify-center md:mr-8 lg:mr-0' options={options}>
                        {aboutPicFirstRow.map((imgPic, index) => (
                            <SplideSlide key={index}>
                                <img src={imgPic} alt={`Image ${index}`} className='w-full h-[200px] object-cover' />
                            </SplideSlide>
                        ))}
                    </Splide>

                    <Splide className='flex items-center justify-center md:ml-8 lg:ml-0' options={options}>
                        {aboutPicSecondRow.map((imgPic, index) => (
                            <SplideSlide key={index}>
                                <img src={imgPic} alt={`Image ${index}`} className='w-full h-[200px] object-cover' />
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
