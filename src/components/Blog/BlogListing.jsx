import React from 'react'
import BlogComponent from './BlogComponent'
import { Typography } from '@material-tailwind/react'

const BlogListing = ({ blogs }) => {
  console.log('blogs', blogs)
  return (
    <>
      <div
        className='bg-blue-400'
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600")', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='max-w-screen-2xl xl:max-w-screen-xl 2xl:max-w-screen-2xl px-12 py-8 mx-auto md:px-16 lg:py-16 lg:px-20'>
          <div className='bg-[#B1D3FF33] px-4 py-6 text-center'>
            <h1 className='text-title-md md:text-title-xl2 text-white font-medium'>
              Blogs Page
            </h1>
          </div>
        </div>
      </div>
      {/* <div className='bg-blue-400 '>
        <div className='max-w-screen-2xl  xl:max-w-screen-xl 2xl:max-w-screen-2xl px-12 py-8 mx-auto md:px-16  lg:py-16 lg:px-20'>
          <div className='bg-[#B1D3FF33]  px-4 py-6 text-center'>
            <h1 className='text-title-md md:text-title-xl2   text-white font-medium '>
            Blogs Page
            </h1>
          </div>
        </div>
      </div> */}
      <section className='px-4 md:px-8 lg:px-16 xl:px-25 '>
        <div className='mt-6 mb-6 flex justify-between'>
          <Typography variant='h2' className='text-teal-900'>
            Latest Blogs
          </Typography>
        </div>

        <div className='grid grid-cols-1  gap-10   2xl:gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4 mb-6'>
          {blogs.length == 0 ? (
            <h1>No Blogs Found</h1>
          ) : (
            blogs.map((blog, index) => (
              <BlogComponent key={index} blog={blog} />
            ))
          )}
        </div>
      </section>
    </>
  )
}

export default BlogListing
