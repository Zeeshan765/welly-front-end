import General from './General'

import { useState } from 'react'

import { Spinner } from '@material-tailwind/react'
import ContactForm from './ContactForm'

const Contact = () => {
  const generalArray = [
    {
      id: 1,
      title: 'Claims and Reports',
      description: `We're here to answer your questions\n
     remove@welly.com`,
    },
    {
      id: 2,
      title: 'IT Support',
      description: `Our friendly team is here to help\n
    support@welly.com`,
    },
  ]

  const [loading, setLoading] = useState(false)

  return (
    <section className='Our-work-section relative'>
      <div
        className='bg-teal-700'
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=600")', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='max-w-screen-2xl xl:max-w-screen-xl 2xl:max-w-screen-2xl px-12 py-8 mx-auto md:px-16 lg:py-16 lg:px-20'>
          <div className='bg-[#B1D3FF33] px-4 py-6 text-center'>
            <h1 className='text-title-md md:text-title-xl2 text-white font-medium'>
              Contact Us Page
            </h1>
          </div>
        </div>
      </div>

      <div className='max-w-screen-2xl  xl:max-w-screen-xl 2xl:max-w-screen-2xl px-12 py-8 mx-auto md:px-16  lg:py-16 lg:px-20'>
        <div className='lg:grid grid-cols-2 gap-27'>
          <div className='col-span-1 '>
            <ContactForm />
          </div>
          <div className='col-span-1   '>
            {generalArray.map((el, idx) => (
              <General key={idx} items={el} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
