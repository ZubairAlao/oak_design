import React from 'react'
import HeaderLine from "@/assets/images/header-line.svg"
import { contactInfo } from '../constants'
import Button from './Button'
import Map from './Map'

const ContactUs = () => {
  return (
    <section className='pb-[93px]'>
        <div className='container lg:flex items-center lg:items-start gap-12'>
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
                        <div className='flex justify-start items-center gap-4'>
                            <img src={info.image} alt={info.label} />
                            <p>{info.label}</p>
                        </div>
                    ))}
                </div>

                <div className='space-y-6'>
                    <p>Fill the form below to send us a message. We promise to maintain high level of privacy.</p>

                    <form action="" className='space-y-4 text-[10px] contact-form'>
                        <div>
                            <label htmlFor="">FULL NAME</label>
                            <input type="text" class="contact-input" placeholder="John Doe" />
                        </div>

                        <div>
                            <label htmlFor="">EMAIL ADDRESS</label>
                            <input type="email" class="contact-input" placeholder="Johndoe@email.com" />
                        </div>

                        <div>
                            <label htmlFor="">PHONE NUMBER</label>
                            <input type="phone" class="contact-input" placeholder="08012344321" />
                        </div>

                        <div>
                            <label htmlFor="">HOW DID YOU HEAR ABOUT US</label>
                            <input type="text" class="contact-input"/>
                        </div>

                        <div>
                            <label htmlFor="">HOW DID YOU HEAR ABOUT US</label>
                            <textarea class="contact-input h-[120px] lg:h-[200px]" placeholder="Type in your message"> </textarea>
                        </div>

                        <Button  text="Send Message" />
                    </form>

                </div>
            </div>

            <Map/>
        </div>
    </section>
  )
}

export default ContactUs