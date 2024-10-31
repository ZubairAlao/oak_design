import React from 'react'
import Hero from '../components/Hero'
import OakHoldings from '../components/OakHoldings'
import OakHome from '../components/OakHome'
import OakCapital from '../components/OakCapital'
import ContactUs from '../components/ContactUs'
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div className=''>
      <Element name="home">
        <Hero />
      </Element>
      <Element name="oakHolding">
        <OakHoldings />
      </Element>
      <Element name="oakHome">
        <OakHome />
      </Element>
      <Element name="oakCapital">
        <OakCapital />
      </Element>
      <Element name="contactUs">
        <ContactUs />
      </Element>
    </div>
  )
}

export default Home