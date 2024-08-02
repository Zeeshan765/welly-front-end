import { Card, CardHeader, Typography } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ blog }) => {
  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/blogs/${id}`);
  }
  return (
    <>
      <div
        onClick={() => handleNavigate(blog?.id)}
        className='cursor-pointer'
      >
        <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color='transparent'
            className='m-0 rounded-xl'
          >
            <img
              src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
              alt='ui/ux review check'
            />
          </CardHeader>
          <div className='py-4'>
            <Typography variant='h4' className=' text-center text-teal-900'>
              {blog?.name}
            </Typography>
          </div>
        </Card>
      </div>
    </>
  )
}

export default BlogCard
