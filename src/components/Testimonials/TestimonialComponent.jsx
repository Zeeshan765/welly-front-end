import { Typography } from '@material-tailwind/react'
import TestimonialForm from './TestimonialForm'
import TestimonialCard from '../Landing/TestimonialCard'
import { API_URLS } from '../../constants/API_URLS'
import { Get } from '../../actions/apiActions'
import { useSnackbar } from 'notistack'
import { useCallback, useEffect, useState } from 'react'

const TestimonialComponent = () => {
  const [testimonials, setTestimonials] = useState([])
  const { enqueueSnackbar } = useSnackbar()

  const getTestimonials = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getTestimonials,
        (response) => {
          console.log('response', response)
          setTestimonials(response)
          enqueueSnackbar('Testimonials fetched successfully', {
            variant: 'success',
          })
        },
        (error) => {
          enqueueSnackbar('Failed to fetch Teams', {
            variant: 'error',
          })
        }
      )
    } catch (error) {
      enqueueSnackbar('Failed to fetch Teams', {
        variant: 'error',
      })
    }
  }, [enqueueSnackbar])

  useEffect(() => {
    getTestimonials()
  }, [getTestimonials])

  return (
    <section className='Our-work-section relative'>
      <div className='bg-teal-700 '>
        <div className='max-w-screen-2xl  xl:max-w-screen-xl 2xl:max-w-screen-2xl px-12 py-8 mx-auto md:px-16  lg:py-16 lg:px-20'>
          <div className='bg-teal-400  px-4 py-6 text-center'>
            <h1 className='text-title-md md:text-title-xl2   text-white font-medium '>
              Testimonials
            </h1>
          </div>
        </div>
      </div>

      <div className='max-w-screen-2xl  xl:max-w-screen-xl 2xl:max-w-screen-2xl px-12 py-8 mx-auto md:px-16  lg:py-16 lg:px-20'>
        <Typography variant='h2' className='text-teal-700'>
          Add Your FeedBack
        </Typography>
        <div className='grid  gap-27 mt-3'>
          <div className='col-span-1 '>
            <TestimonialForm />
          </div>
        </div>

        <div className='mt-20'>
          <Typography variant='h2' className='text-teal-700'>
            Clients FeedBack
          </Typography>
          <div className='grid grid-cols-1  gap-10    2xl:gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-6 mb-6'>
            {testimonials.length > 0 ? (
              testimonials
                .slice(0, 4)
                .map((data, index) => (
                  <TestimonialCard key={index} data={data} />
                ))
            ) : (
              <h1>No Testimonial Found</h1>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialComponent
