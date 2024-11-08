import React from 'react'
import FooterLogo from "@/assets/images/aok-logo.svg"
import FacebookIcon from "@/assets/images/facebook.svg"
import TwitterIcon from "@/assets/images/twitter.svg"
import LinkedInIcon from "@/assets/images/linkedin.svg"
import InstagramIcon from "@/assets/images/instagram.svg"
import { Link } from 'react-scroll'
import FooterGrid from "@/assets/images/footer-grid.svg"
import { goldenContactInfo } from '../constants'


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='relative pb-16 pt-48'>
        <div className="">
          <div 
            className="absolute z-10 -top-32 h-[400px] bg-cover bg-center w-full"
            style={{ 
              backgroundImage: `url(${FooterGrid})`, 
              backgroundPosition: 'center', 
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat' }}
          >
          </div>
          <div className='absolute -top-12  h-[50px] bg-gradient-to-b from-[#2A2A2A4F] to-[#0C0C0D] z-30 w-full'>
          </div>

          <div className='flex flex-col justify-center items-center w-full container md:gap-24 relative z-20'>
            <div className='max-w-[1236px] w-[95%] space-y-10 md:space-y-0 flex items-center justify-center flex-col md:flex-row md:justify-between md:items-start md:gap-4'>
              <div className='space-y-4'>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                >
                  <img src={FooterLogo} alt="footer logo" className='w-[89px] md:w-[132px] h-fit cursor-pointer'/>
                </Link>
                  <div className='lg:flex items-center gap-5 justify-center hidden'>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                      <img src={InstagramIcon} alt="Instagram icon" className="social-icon cursor-pointer" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <img src={TwitterIcon} alt="Twitter icon" className="social-icon cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                      <img src={LinkedInIcon} alt="LinkedIn icon" className="social-icon cursor-pointer" />
                    </a>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <img src={FacebookIcon} alt="Facebook icon" className="social-icon cursor-pointer" />
                    </a>
                  </div>
              </div>
              
              <div className='flex items-center gap-5 justify-center md:hidden'>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Instagram icon" className="social-icon cursor-pointer" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterIcon} alt="Twitter icon" className="social-icon cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedInIcon} alt="LinkedIn icon" className="social-icon cursor-pointer" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} alt="Facebook icon" className="social-icon cursor-pointer" />
                </a>
              </div>

            <div className='flex md:hidden gap-5 justify-center flex-wrap md:flex-nowrap md:flex-col font-semibold'>
              <Link to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-104}
                  className='cursor-pointer footer-link'
                >
                  HOME
                </Link>

                <Link
                  to="oakHolding"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-104}
                  className='cursor-pointer footer-link'
                >WHO WE ARE</Link>

                <Link
                to="oakHome"
                smooth={true}
                duration={500}
                spy={true}
                offset={-104}
                className='cursor-pointer footer-link'
                >WHAT WE DO</Link>
                <Link
                  to="oakHome"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-104}
                  className='cursor-pointer footer-link'
                >OAK HOME</Link>

                <Link
                  to="oakCapital"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-104}
                  className='cursor-pointer footer-link'
                >THE OAK CAPITAL</Link>
              </div>

              
              <div className='hidden md:flex flex-col gap-6 text-base font-semibold'>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-104}
                  className='cursor-pointer footer-link'
                >
                  HOME
                </Link>

                <Link
                  to="oakHolding"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-104}
                  className='cursor-pointer footer-link'
                >WHO WE ARE</Link>

                <Link
                to="oakHome"
                smooth={true}
                duration={500}
                spy={true}
                offset={-104}
                className='cursor-pointer footer-link'
                >WHAT WE DO</Link>

              </div>
              <div className='hidden md:flex gap-6 flex-col text-base font-semibold'>
                <Link
                  to="oakHome"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-104}
                  className='cursor-pointer footer-link'
                >OAK HOME</Link>

                <Link
                  to="oakCapital"
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-104}
                  className='cursor-pointer footer-link'
                >THE OAK CAPITAL</Link>
              </div>


              <div className='flex items-center justify-center md:items-start flex-col gap-6'>
                <h3 className='font-semibold flex-1 text-base'>CONTACT US</h3>
                <div className='space-y-6'>
                  {goldenContactInfo.map((info) => (
                      <div key={info.label} className='flex items-center justify-center flex-col md:flex-row md:justify-start gap-2'>
                          <img src={info.image} alt={info.label} />
                          <p>{info.label}</p>
                      </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='hidden items-center gap-5 justify-center md:flex lg:hidden'>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Instagram icon" className="social-icon cursor-pointer" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterIcon} alt="Twitter icon" className="social-icon cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={LinkedInIcon} alt="LinkedIn icon" className="social-icon cursor-pointer" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} alt="Facebook icon" className="social-icon cursor-pointer" />
                </a>
              </div>
          </div>
        </div>
        <p className='border-t-[0.5px] border-[#9F8449] py-3 mt-12 container font-sizes text-center z-20 relative'>© The Oak Holdings {currentYear}. All Rights Reserved</p>
    </footer>
  )
}

export default Footer