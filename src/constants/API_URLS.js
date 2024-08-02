// const baseUrl = "http://localhost:5000";
// production url
const baseUrl = "https://api-wellypsicologabackend-production.up.railway.app";

export const API_URLS = {
  // Auth APIs
  login: `${baseUrl}/users/login`,
  signup: `${baseUrl}/users/register`,
  resetPassword: `${baseUrl}/users/resetPassword`,



  // Testimonials
  addTestimonials: `${baseUrl}/testimonials/create`,
  getTestimonials: `${baseUrl}/testimonials/get-all`,



  // Blogs

  getBlogCategory: `${baseUrl}/blog-categories/allCategories`,
  getBlogListing: `${baseUrl}/blogs/category/:id`,
  getSingleBlog: `${baseUrl}/blogs/getBlogById/:blogId`,


  //  FAQ
  getAllFaq: `${baseUrl}/faqs/allFaqs`,





  // getAllDoctor
  getAllDoctor: `${baseUrl}/users/getAllUsersWithPagination?page=1&page_size=10&role=doctor`,
};
