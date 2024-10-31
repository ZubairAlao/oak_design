import React from 'react'
import HeaderLine from "@/assets/images/header-line.svg"
import { contactInfo } from '../constants'
import Button from './Button'
import Map from './Map'
import { motion } from 'framer-motion'

const ContactUs = () => {
  return (
    <section className='pb-[93px]'>
        <motion.div 
            className='container lg:flex items-center lg:items-start gap-12'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }} 
        >
            <div className='lg:space-y-12 space-y-8'>
                <div className=''>
                    <h3 className='text-base cormorant-garamond font-bold'>
                        Office 
                        <span className='text-2xl block text-[#C5A675]'>CONTACT INFORMATION</span>
                    </h3>
                    <img src={HeaderLine} alt="line" />
                </div>

                <div className='space-y-6'>
                    {contactInfo.map((info) => (
                        <div key={info.label} className='flex justify-start items-center gap-4'>
                            <img src={info.image} alt={info.label} />
                            <p>{info.label}</p>
                        </div>
                    ))}
                </div>

                <div className='space-y-6'>
                    <p>Fill the form below to send us a message. We promise to maintain high level of privacy.</p>

                    <form action="" className='space-y-4 text-[10px] contact-form'>
                        <div>
                            <label htmlFor="fullName">FULL NAME</label>
                            <input type="text" id="fullName" className="contact-input" placeholder="John Doe" />
                        </div>

                        <div>
                            <label htmlFor="email">EMAIL ADDRESS</label>
                            <input type="email" id="email" className="contact-input" placeholder="Johndoe@email.com" />
                        </div>

                        <div>
                            <label htmlFor="phone">PHONE NUMBER</label>
                            <input type="tel" id="phone" className="contact-input" placeholder="08012344321" />
                        </div>

                        <div>
                            <label htmlFor="referral">HOW DID YOU HEAR ABOUT US</label>
                            <input type="text" id="referral" className="contact-input" placeholder="Referral Source" />
                        </div>

                        <div>
                            <label htmlFor="message">MESSAGE</label>
                            <textarea id="message" className="contact-input min-h-[120px] lg:min-h-[200px]" placeholder="Type in your message" /> 
                        </div>

                        <Button text="Send Message" />
                    </form>

                </div>
            </div>

            <Map/>
        </motion.div>
    </section>
  )
}

export default ContactUs