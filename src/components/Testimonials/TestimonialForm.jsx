import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Post } from '../../actions/apiActions'
import { API_URLS } from '../../constants/API_URLS'
import { useSnackbar } from 'notistack'

const TestimonialForm = () => {
  const { enqueueSnackbar } = useSnackbar()
  // Define Yup validation schema
  const validationSchema = Yup.object({
    clientName: Yup.string().required('Name is required'),

    content: Yup.string().required('Comment is required'),
  })

  // Initial form values
  let initialValues = {
    clientName: '',
    content: '',
    rating: 0,
  }

  // Handle login form submission
  const onSubmit = (values, { resetForm }) => {
    try {
      Post(
        values,
        API_URLS.addTestimonials,
        (resp) => {
          enqueueSnackbar('Testimonial Added Successfully', {
            variant: 'success',
          })
          resetForm()
        },
        (error) => {
          enqueueSnackbar('Unable to add Testimonial', { variant: 'error' })
        }
      )
    } catch (error) {
      enqueueSnackbar('Something went wrong', { variant: 'error' })
    }
  }

  //Formik
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className='pt-3'>
          <label className='text-title-xsm1 text-custom-black font-normal'>
            Name
          </label>
          <input
            type='text'
            name='clientName'
            placeholder='Please Enter Your Name'
            className={`w-full rounded-lg border ${
              formik.touched.clientName && formik.errors.clientName
                ? 'border-red-500'
                : 'border-stroke'
            } bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.clientName && formik.errors.clientName && (
            <div className='mt-2 text-red-500'>{formik.errors.clientName}</div>
          )}
        </div>
        <div className='pt-3'>
          <label className='text-title-xsm1 text-custom-black font-normal'>
            Rating
          </label>
          <input
            type='number'
            name='rating'
            className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className='pt-3'>
          <label className='text-title-xsm1 text-custom-black font-normal'>
            Comments
          </label>
          <textarea
            rows={5}
            name='content'
            placeholder='Write your comments here!'
            className={`w-full rounded-lg border ${
              formik.touched.content && formik.errors.content
                ? 'border-red-500'
                : 'border-stroke'
            } bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary`}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.content && formik.errors.content && (
            <div className='mt-2 text-red-500'>{formik.errors.content}</div>
          )}
        </div>

        <div className='pt-4 text-center'>
          <button
            type='submit'
            className='inline-flex gap-3 w-1/2 rounded-3xl bg-custom-blue-dark cursor-pointer items-center justify-center px-6 py-2 mr-3 text-lg font-medium text-center  text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900'
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}

export default TestimonialForm
