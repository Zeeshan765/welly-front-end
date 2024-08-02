import { useState } from 'react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import Logo from '../assets/newLogo.jpeg'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className='bg-white  py-4  px-4 md:px-8 lg:px-16 xl:px-25  flex justify-between items-center'>
      <div className='flex-shrink-0'>
        <Link className='block flex-shrink-0 ' to='/'>
          <img src={Logo} alt='Logo' className='h-15 w-auto' />
        </Link>
      </div>
      {toggle ? (
        <XMarkIcon
          onClick={() => setToggle(!toggle)}
          className='w-6 h-6 text-custom-black md:hidden block'
        />
      ) : (
        <Bars4Icon
          onClick={() => setToggle(!toggle)}
          className='w-6 h-6  text-custom-black md:hidden block'
        />
      )}

      <ul className=' hidden md:flex gap-6 text-title-xsm text-custom-black font-medium'>
        <li>
          <Link to='/about-us'>About Us</Link>
        </li>
        <li>
          <Link to='/contact-us'>Contact Us</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          {' '}
          <Link to='/blogs'>Blogs</Link>
        </li>
      </ul>

      {/* Responsive Design */}
      <ul
        className={`duration-500 fixed w-full top-[83px] z-1 bg-custom-blue-dark text-white md:hidden ${
          toggle ? 'left-0' : 'left-[-100%]'
        }`}
      >
        <li className='p-3'>
          <Link to='/about-us'>About Us</Link>
        </li>
        <li className='p-3'>
          <Link to='/services'>Services</Link>
        </li>
        <li className='p-3'>
          <Link to='/contact-us'>Contact Us</Link>
        </li>
        <li className='p-3'>
          <Link to='/blogs'> Blogs </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
