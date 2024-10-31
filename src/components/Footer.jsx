import React from 'react'
import FooterLogo from "@/assets/images/footer-logo.png"
import FacebookIcon from "@/assets/images/facebook.svg"
import TwitterIcon from "@/assets/images/twitter.svg"
import LinkedInIcon from "@/assets/images/linkedin.svg"
import InstagramIcon from "@/assets/images/instagram.svg"
import { Link } from 'react-router-dom'
import LargeHeroGrid from "@/assets/images/large-hero-grid.svg"
import { goldenContactInfo } from '../constants'
import HeroBg from "@/assets/images/hero-bg.png"


const Footer = () => {

  return (
    <footer className='relative bg-[#2F2F2F] pb-16 pt-48'>
        <div className="">
          <div 
            className="absolute rotate-180 z-10 top-0 min-h-[520px] bg-cover bg-center w-full"
            style={{ 
              backgroundImage: `url(${HeroBg})`, 
              backgroundPosition: 'center', 
              backgroundSize: '100% 100%', 
              backgroundRepeat: 'no-repeat' }}
          >
          </div>

          <div className='flex flex-col justify-center items-center w-full container md:gap-24 relative z-20 '>
            <div className='max-w-[1236px] w-[90%] space-y-10 md:space-y-0 flex items-center justify-center flex-col md:flex-row md:justify-between md:items-start md:gap-4'>
              <div className='space-y-4'>
                <img src={FooterLogo} alt="footer logo" className='w-[89px] md:w-[132px] h-fit'/>
                  <div className='lg:flex items-center gap-5 justify-center hidden'>
                    <img src={InstagramIcon} alt="instagram icon" />
                    <img src={TwitterIcon} alt="twitter icon" />
                    <img src={LinkedInIcon} alt="linkedin icon" />
                    <img src={FacebookIcon} alt="facebook icon" />
                  </div>
              </div>
              
              <div className='flex items-center gap-5 justify-center md:hidden'>
                <img src={InstagramIcon} alt="" />
                <img src={TwitterIcon} alt="" />
                <img src={LinkedInIcon} alt="" />
                <img src={FacebookIcon} alt="" />
              </div>

              <div className='flex md:hidden gap-5 justify-center flex-wrap md:flex-nowrap md:flex-col font-semibold'>
                <button>HOME</button>
                <button>WHO WE ARE</button>
                <button>WHAT WE DO</button>
                <button>OAK HOME</button>
                <button>THE OAK CAPITAL</button>
              </div>

              
              <div className='hidden md:flex flex-col gap-6 text-base font-semibold'>
                <Link to="">HOME</Link>
                <Link to="#welcome">WHO WE ARE</Link>
                <Link to="">WHAT WE DO</Link>
              </div>
              <div className='hidden md:flex gap-6 flex-col text-base font-semibold'>
                <Link to="">OAK HOME</Link>
                <Link to="">THE OAK CAPITAL</Link>
              </div>


              <div className='flex items-center justify-center md:items-start flex-col gap-6'>
                <h3 className='font-semibold md:text-xl'>CONTACT US</h3>
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
                <img src={InstagramIcon} alt="" className='w-5 h-fit'/>
                <img src={TwitterIcon} alt="" className='w-5 h-fit'/>
                <img src={LinkedInIcon} alt="" className='w-5 h-fit'/>
                <img src={FacebookIcon} alt="" className='w-5 h-fit'/>
              </div>
          </div>
        </div>
        <p className='border-t-[0.5px] border-[#9F8449] py-3 mt-12 container font-sizes text-center z-20 relative'>© The Oak Holdings 2024. All Rights Reserved</p>
    </footer>
  )
}

export default Footer