import { Card, CardBody, Typography, Button } from '@material-tailwind/react'
import { ServiceData } from '../../../CardData'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <>
      <section className='px-4 md:px-8 lg:px-16 xl:px-25 '>
        <div className='mt-8 mb-4'>
          <Typography variant='h2' className='text-teal-900'>Services</Typography>
        </div>

        <div className='grid grid-cols-1  gap-10   2xl:gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4 mb-6'>
         
        {ServiceData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
         
        </div>
      </section>
    </>
  )
}

export default Services
