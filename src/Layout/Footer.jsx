import { Link } from 'react-router-dom'
import Logo from '../assets/newLogo.jpeg'

const Footer = () => {
  return (
    <>
      <footer className='bg-teal-900'>
        <div className=' py-8 '>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <div className=' lg:ml-auto col-span-1'>
              <div className='text-white'>
                <img src={Logo} alt="" className="w-30 h-14" />
                {/* <Image src="/AlgoLogo.png" width={120} height={120} alt="" /> */}
              </div>

              <p className='mt-4 max-w-sm text-white font-normal leading-5 text-title-xsm1'>
                Discover the best job and rental listings in your city. Notis
                aggregates and summarizes ads from various sources so you can
                easily find what you're looking for. Customize your searches and
                receive instant notifications of new opportunities. 
              </p>
              <div className='text-xs  text-gray-500 border-t mt-8 pt-5 '>
                <ul className='mt-6  text-sm flex gap-10 text-white'>
                  <li>
                    {/* <Link
                      to={'/privacy-policy'}
                      className="text-title-xsm1 font-semibold text-white transition hover:opacity-75"
                    >
                      Privacy Policy
                    </Link> */}
                    Privacy Policy
                  </li>

                  <li>
                    {/* <Link
                      to={'/term-use'}
                      className="text-title-xsm1 font-semibold text-white transition hover:opacity-75"
                    >
                      Terms of Use
                    </Link> */}
                    Terms of Use
                  </li>
                  <li>
                    {/* <Link
                      to={'/contact-us'}
                      className="text-title-xsm1 font-semibold text-white transition hover:opacity-75"
                    >
                      Copyright Claims
                    </Link> */}
                    Copyright Claims
                  </li>
                </ul>
              </div>
            </div>

            <div className='grid grid-cols-1  gap-4 sm:grid-cols-2  lg:col-span-2 lg:grid-cols-2 '>
              <div className='lg:ml-auto'>
                <p className='text-title-xsm font-semibold text-white transition hover:opacity-75'>
                  {' '}
                  Quick Links
                </p>

                <ul className='mt-6 space-y-4 text-sm text-white'>
                  <li>
                    <Link
                      to='/'
                      className='text-title-xsm1 font-normal text-white transition hover:opacity-75'
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='/about-us'
                      className='text-title-xsm1 font-normal text-white transition hover:opacity-75'
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to='/contact-us'
                      className='text-title-xsm1 font-normal text-white transition hover:opacity-75'
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='lg:ml-19'>
                <p className='text-title-xsm font-semibold text-white transition hover:opacity-75'>
                  Contact
                </p>

                <ul className='mt-6 space-y-4 text-sm'>
                  <li>
                    <a
                      href='#'
                      className='text-title-xsm1 font-normal text-white transition hover:opacity-75'
                    >
                      La Rioja 1235 7B, Mar del <br /> Plata, Provincia de
                      Buenos <br /> Aires, CP 7600, Argentina.
                    </a>
                  </li>

                  <li>
                    <a
                      href='mailto:support@welly.com'
                      className='text-title-xsm1 font-normal text-white transition hover:opacity-75'
                    >
                      support@welly.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
