import { Typography, Button } from '@material-tailwind/react'
import React, { useCallback, useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { useNavigate } from 'react-router-dom'
import { API_URLS } from '../../constants/API_URLS'
import { Get } from '../../actions/apiActions'

const Blog = () => {


  const navigate = useNavigate()

  const [blogData, setBlogData] = useState([])
  const getBlog = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getBlogCategory,
        (response) => {
          setBlogData(response)
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
      <section className='px-4 md:px-8 lg:px-16 xl:px-25 '>
        <div className='mt-6 mb-6 flex justify-between'>
          <Typography variant='h2' className='text-teal-900'>Blogs</Typography>
         
        </div>

        <div className='grid grid-cols-1  gap-10   2xl:gap-20 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mt-4 mb-6'>
          
          
        {blogData.slice(0, 4).map((blog, index) => (
             <BlogCard key={index} blog={blog} />
          ))}
          
        </div>
      </section>
    </>
  )
}

export default Blog
