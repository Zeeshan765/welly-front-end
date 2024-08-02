import { Avatar, Card, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'

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

const PsycologostCard = ({ data }) => {
  return (
    <>
      <Card
        shadow={false}
        className='w-full bg-gradient-to-r from-teal-500 to-teal-900 '
      >
        <CardHeader
          color='transparent'
          floated={false}
          shadow={false}
          className='mx-0 flex items-center  p-2'
        >
          <div className='flex w-full flex-col '>
            <div className='flex items-center justify-around'>
              <div>
                <Avatar
                  size='xxl'
                  variant='circular'
                  src={data?.image}
                  alt='tania andrew'
                />
              </div>

              <div className='text-white'>
                <Typography
                  className='text-white'
                  variant='h5'
                  color='blue-gray'
                >
                  {data?.name}
                </Typography>
                <Typography className='text-white' color='blue-gray'>
                  {data?.designation}
                </Typography>
                <Typography className='text-white' color='blue-gray'>
                  {data?.experience}
                </Typography>
              </div>
            </div>
          </div>
        </CardHeader>

        <div className='flex items-center justify-between px-15 py-2'>
          <div className='flex justify-between gap-1 items-center px-6'>
            <Typography variant='h5' color='white'>
              {data?.rating}/5
            </Typography>
            <StarIcon />
          </div>
          <div>
            <Typography variant='h5' color='white'>
              $ {data?.fee}
            </Typography>
          </div>
        </div>
      </Card>
    </>
  )
}

export default PsycologostCard
