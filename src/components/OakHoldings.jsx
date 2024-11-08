import React from 'react';
import { motion } from 'framer-motion';
import WelcomeImg1 from "@/assets/images/welcome1.jpg";
import WelcomeImg2 from "@/assets/images/welcome2.jpg";
import headerLine from "@/assets/images/header-line.svg";

const Welcome = () => {
  return (
    <section className="pb-28 pt-16 relative z-20 overflow-hidden">
      <div className="container space-y-5 md:flex justify-center items-start md:gap-9 lg:gap-16">
        
        <motion.div
          className="space-y-8 flex items-start justify-center flex-col md:w-[47%] md:max-w-[557px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="text-base cormorant-garamond font-bold">
              Welcome to 
              <span className="text-3xl block text-[#C5A675]">THE OAKS HOLDINGS</span>
            </h3>
            <img src={headerLine} alt="line" />
          </div>
          <div className="space-y-5 lg:space-y-12 block">
            <p className="font-sizes font-normal">
              When we say we are your partner in building a more robust future, we mean it. Through years of experience and sectoral expertise, we've become one of the few industry leaders in the Real Estate, Venture Capital, and Digital Banking sectors.
            </p>
            <motion.img 
              src={WelcomeImg1} 
              loading="lazy"
              alt="welcome image" 
              className="w-full transition-all duration-300 hover:border-2 border-[#AF885A]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        <motion.div
          className="md:w-[39%] md:max-w-[327px] lg:max-w-[586px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={WelcomeImg2} 
            alt="welcome image 2" 
            loading="lazy"
            className="w-full lg:min-h-[467px] md:min-h-[367px] object-cover transition-all duration-300 hover:border-2 border-[#AF885A]"
          />
          <div className="font-semibold font-sizes md:space-y-0.5 mt-4">
            <p>THAT`S WHAT THE OAK ADVANTAGE IS ABOUT.</p>
            <p className="kapakana text-[#AF885A]">Olukayode Olusanya</p>
            <p>CEO</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Welcome;
