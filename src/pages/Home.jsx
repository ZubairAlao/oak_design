import React from 'react'
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import AboutUs from '../components/AboutUs'
import OakCapital from '../components/OakCapital'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div>
      <Hero />
      <Welcome />
      <AboutUs />
      <OakCapital />
      <ContactUs />
    </div>
  )
}

export default Home