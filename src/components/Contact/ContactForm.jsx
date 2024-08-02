import React, { useState } from 'react'

const ContactForm = () => {

const [loading,setLoading] = useState()


  return (
    <>
      <div className=' xl:flex    xl:flex-wrap xl:gap-[6%] justify-between    '>
        <div className=' xl:w-[45%]  mt-2 '>
          <label className='text-title-xsm1 text-custom-black font-normal'>
            First Name
          </label>
          <input
            type='text'
            name='first_name'
            placeholder='Michael'
            className={`w-full rounded-lg  mt-2 border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
          />
        </div>
        <div className='xl:w-[45%] mt-2 '>
          <label className='text-title-xsm1 text-custom-black font-normal'>
            Last Name
          </label>
          <input
            type='text'
            name='last_name'
            placeholder='Smith'
            className={`w-full rounded-lg mt-2 border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
          />
        </div>
      </div>
      <div className='pt-3'>
        <label className='text-title-xsm1 text-custom-black font-normal'>
          Email
        </label>
        <input
          type='text'
          name='email'
          placeholder='michael_smith@gmail.com'
          className={`w-full rounded-lg  mt-2 border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
        />
      </div>
      <div className='pt-3'>
        <label className='text-title-xsm1 text-custom-black font-normal'>
          Message
        </label>
        <textarea
          rows={5}
          name='message'
          placeholder='Write your comments here!'
          className={`w-full rounded-lg  mt-2  border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
        />
      </div>

      <div className='pt-4'>
        <button
          type='submit'
          className='inline-flex gap-3 w-full rounded-3xl bg-teal-700 cursor-not-allowed items-center justify-center px-6 py-2 mr-3 text-lg font-medium text-center  text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
        >
          {loading ? <Spinner className='h-6 w-6' /> : 'Submit'}
        </button>
      </div>
    </>
  )
}

export default ContactForm
