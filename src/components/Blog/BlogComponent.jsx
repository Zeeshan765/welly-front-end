import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom'

const BlogComponent = ({ blog }) => {
  const navigate = useNavigate()

  const handleNavigate = (id) => {
    navigate(`/blog/${id}`)
  }

  return (
    <div onClick={()=>handleNavigate(blog?.id)} className='cursor-pointer'>
      <Card className=' overflow-hidden'>
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='m-0 rounded-none'
        >
          <img src={blog?.image} alt='ui/ux review check' />
        </CardHeader>
        <CardBody>
          <Typography variant='h4' color='blue-gray'>
            {blog?.title}
          </Typography>
          <Typography variant='lead' color='gray' className='mt-3 font-normal'>
            {blog?.content}
          </Typography>
        </CardBody>
      </Card>
    </div>
  )
}

export default BlogComponent
