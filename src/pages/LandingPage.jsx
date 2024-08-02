import React from 'react'
import Banner from '../components/Landing/Banner'
import Services from '../components/Landing/Services'
import Testimonial from '../components/Landing/Testimonial'
import ContactBanner from '../components/Landing/ContactBanner'
import DoctorCard from '../components/Landing/DoctorCard'
import Blog from '../components/Landing/Blog'
import FAQ from '../components/Landing/FAQ'

const LandingPage = () => {
  return (
    <>
      <Banner />
      <Services />
      <Testimonial />
      <ContactBanner />
      <DoctorCard />
      <Blog />
      <FAQ />
    </>
  )
}

export default LandingPage
