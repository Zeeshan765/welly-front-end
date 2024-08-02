import React, { useCallback, useEffect, useState } from 'react'
import BlogListing from '../components/Blog/BlogListing'
import { useParams } from 'react-router-dom'
import { Get } from '../actions/apiActions'
import { API_URLS } from '../constants/API_URLS'

const BlogPage = () => {
  const { id } = useParams()

  const [blogs, setBlogs] = useState([])
  const getBlogs = useCallback(() => {
    try {
      Get(
        {},
        API_URLS.getBlogListing.replace(':id', parseInt(id)),
        (response) => {
          setBlogs(response)
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
    getBlogs()
  }, [getBlogs])

  return (
    <>
      <BlogListing blogs={blogs} />
    </>
  )
}

export default BlogPage
