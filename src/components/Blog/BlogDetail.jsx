import { Typography } from '@material-tailwind/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Get } from '../../actions/apiActions'
import { API_URLS } from '../../constants/API_URLS'

const BlogDetail = () => {
  const { blogId } = useParams()
  console.log('id', blogId)

  const [blog, setBlog] = useState([])
  const getBlog = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getSingleBlog.replace(':blogId', parseInt(blogId)),
        (response) => {
          setBlog(response)
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
    getBlog()
  }, [getBlog])

  return (
    <>
      <section className='px-4 md:px-8 lg:px-16 xl:px-25 py-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='mb-6'>
            <img
              src={blog?.image}
              alt={blog?.title}
              className='w-full h-auto rounded-lg shadow-md'
            />
          </div>
          <div className='mt-6 mb-6'>
            <Typography variant='h2' className='text-teal-900'>
              {blog?.title}
            </Typography>
          </div>
          <div className='mt-4'>
            <Typography
              variant='body1'
              className='text-gray-700 leading-relaxed'
            >
              {blog?.content}
            </Typography>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetail
