import BlogDetail from './src/components/Blog/BlogDetail';
import { AboutUs, BlogPage, ContactUsPage, LandingPage, TestimonialPage } from './src/pages';
import ServicesPage from './src/pages/ServicesPage';
import AppointmentPage from './src/sections/services/Appointments';


const coreRoutes = [
    {
        path: '/',
        title: 'Home Page',
        component: LandingPage,
    },
    {
        path: '/contact-us',
        title: 'Contact Us Page',
        component: ContactUsPage,
    },
    {
        path: '/blogs/:id',
        title: 'Blog Page',
        component: BlogPage,
    },


    {
        path: '/blog/:blogId',
        title: 'Blog Page',
        component: BlogDetail,
    },
    {
        path: '/testimonials',
        title: 'Testimonial Page',
        component: TestimonialPage,
    },
    {
        path: '/about-us',
        title: 'About Us Page',
        component: AboutUs,
    },
    {
        path: '/services',
        title: 'Services Page',
        component: ServicesPage,
    },
    {
        path: '/appointments',
        title: 'Appointments Page',
        component: AppointmentPage,
    },
  

];

const routes = [...coreRoutes];
export default routes;