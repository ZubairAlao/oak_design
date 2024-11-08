import React from 'react';
import { aboutPicFirstRow, aboutPicSecondRow } from '../constants';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import headerLine from "@/assets/images/header-line.svg";
import HomeOakGrid from "@/assets/images/homeoak-grid.svg";
import { motion } from 'framer-motion';

const AboutUs = () => {
    const options = {
        type: 'loop',
        gap: '0rem',
        resetProgress: false,
        width: "100%",
        rewind: true,
        perPage: 4,
        perMove: 1,
        rewindSpeed: 3000,
        arrows: false,
        pagination: false,
        drag: 'free',
        autoplay: true,
        interval: 3000,
        breakpoints: {
            1024: { perPage: 4, gap: '0rem' },
            820: { perPage: 3, gap: '0rem' },
            576: { perPage: 2, gap: '0rem' },
        },
    };

    const optionsTwo = {
        type: 'loop',
        gap: '0rem',
        resetProgress: false,
        width: "100%",
        rewind: true,
        perPage: 4,
        perMove: 1,
        rewindSpeed: 3000,
        arrows: false,
        pagination: false,
        drag: 'free',
        autoplay: true,
        interval: 3000,
        delay: 1500,
        direction: 'rtl',
        breakpoints: {
            1024: { perPage: 4, gap: '0rem' },
            820: { perPage: 3, gap: '0rem' },
            576: { perPage: 2, gap: '0rem' },
        },
    };

    return (
        <section className='bg-[#1B1A1A] py-14 overflow-hidden'>
            <div className='space-y-9'>
                <motion.div 
                    className="container text-center space-y-4"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='flex items-center flex-col'>
                        <h1 className='text-base cormorant-garamond font-bold'>
                            What we do
                            <span className='text-3xl block text-[#C5A675]'>THE OAK HOME</span>
                        </h1>
                        <img src={headerLine} alt="line" className='block' />
                    </div>
                    <p className='font-sizes md:w-[75%] md:max-w-[623px] lg:w-[68%] lg:max-w-[987px] mx-auto'>
                        Oak Homes is a leading Real Estate Development company with its primary business in Lagos, Nigeria and recently made a foray into the United Kingdom and the United States. Our value chain business with an intention to backward integrate includes Facility management, Construction and Infrastructure Development companies within the Group Business. We pride ourselves as being an innovative and creative team, with combined experience spanning over four (4) decades.
                        <span className='block'>-</span>
                        We pride ourselves as lovers of art and creating masterpieces of Real Estate Portfolio.
                    </p>
                </motion.div>

                <motion.div
                    className='space-y-8 relative'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="absolute top-0 z-10 w-full h-full rotate-180"
                    style={{ 
                        backgroundImage: `url(${HomeOakGrid})`,
                        backgroundPosition: 'bottom', 
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat' }}
                    >
                    </div>
                    <Splide className='flex items-center justify-center md:mr-8 lg:mr-0 relative z-20' options={options}>
                        {aboutPicFirstRow.map((imgPic, index) => (
                            <SplideSlide key={index}>
                                <picture>
                                    <source srcSet={`${imgPic.optimizedImage}`} type="image/webp" />
                                    <motion.img 
                                        src={`${imgPic.image}`} 
                                        alt={`Image ${index}`} 
                                        className='w-full h-[200px] object-cover' 
                                        initial={{ scale: 0.9 }}
                                        whileHover={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        loading="lazy"
                                    />
                                </picture>
                            </SplideSlide>
                        ))}
                    </Splide>

                    <Splide className='flex items-center justify-center md:ml-8 lg:ml-0 relative z-20' options={optionsTwo}>
                        {aboutPicSecondRow.map((imgPic, index) => (
                            <SplideSlide key={index}>
                                <picture>
                                    <source srcSet={`${imgPic.optimizedImage}`} type="image/webp" />
                                    <motion.img 
                                        src={`${imgPic.image}`} 
                                        alt={`Image ${index}`} 
                                        className='w-full h-[200px] object-cover' 
                                        initial={{ scale: 0.9 }}
                                        whileHover={{ scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        loading="lazy"
                                    />
                                </picture>
                            </SplideSlide>
                        ))}
                    </Splide>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutUs;
