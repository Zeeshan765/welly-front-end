import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  CardFooter,
  Button,
} from '@material-tailwind/react'
import TestimonialCard from './TestimonialCard'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { API_URLS } from '../../constants/API_URLS'
import { Get } from '../../actions/apiActions'

function StarIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='h-5 w-5 text-yellow-700'
    >
      <path
        fillRule='evenodd'
        d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
        clipRule='evenodd'
      />
    </svg>
  )
}

const Testimonial = () => {
  const navigate = useNavigate()
  const [testimonials, setTestimonials] = useState([])
  const getTestimonials = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getTestimonials,
        (response) => {
          setTestimonials(response)
        },
        (error) => {
          console.log('error', error)
        }
      )
    } catch (error) {
      console.log('error', error)
    }
  }, [])

  useEffect(() => {
    getTestimonials()
  }, [getTestimonials])

  const handleNavigate = () => {
    navigate('/testimonials')
  }
  return (
    <>
      <section className='px-4 md:px-8 lg:px-16 xl:px-25 mt-4'>
        <div className='mt-10 mb-4 flex justify-between'>
          <Typography variant='h2' className='text-teal-900'>
            Testimonials
          </Typography>
          <div className='inline-block mt-2'>
            <Button
              size='sm'
              variant='text'
              className='flex items-center gap-2  bg-black text-white p-3'
              onClick={handleNavigate}
            >
              View More
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </Button>
          </div>
        </div>

        <div className='grid grid-cols-1  gap-10   2xl:gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4 mb-6'>
          {testimonials.length > 0
            ? testimonials
                .slice(0, 4)
                .map((data, index) => (
                  <TestimonialCard key={index} data={data} />
                ))
            : ''}
        </div>
      </section>
    </>
  )
}

export default Testimonial
