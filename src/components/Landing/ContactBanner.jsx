import React from 'react'
import { useNavigate } from 'react-router-dom'

const ContactBanner = () => {

const navigate = useNavigate()

const handleNavigate = () => {
navigate('/contact-us')

}


  return (
    <div className='bg-teal-700 mt-10 '>
      <div className='max-w-screen-2xl  xl:max-w-screen-xl 2xl:max-w-screen-2xl px-12 py-8 mx-auto md:px-16  lg:py-16 lg:px-20'>
        <div className='bg-[#B1D3FF33]  px-4 py-6 text-center'>
          <h1 className='text-title-md md:text-title-xl2   text-white font-medium '>
          Get free medical advice by asking a doctor
          </h1>
        <div className=''>
        <button
        onClick={handleNavigate}
        className='mt-4 text-title-sm capitalize text-white px-6 py-3 bg-black rounded-xl'>
            Contact Us
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
