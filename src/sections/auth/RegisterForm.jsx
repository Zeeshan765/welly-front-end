import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  TextField,
  Button,
  Typography,
  Box,
  Link,
  Container,
  CssBaseline,
  Avatar,
} from '@mui/material'
import { styled, keyframes } from '@mui/system'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Logo from '../../assets/newLogo.jpeg'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const FadeInBox = styled(Box)({
  animation: `${fadeIn} 1s ease-in-out`,
})

export default function RegisterSection({ onSubmit }) {
  // Initial values for the form fields
  const initialValues = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    role: 'user',
    // country:'england'
  }

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    username: Yup.string().required('User Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  })
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/login')
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <FadeInBox
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          alt='Your Company'
          src={Logo}
          style={{
            width: '200px',
            height: '200px',
            display: 'block',
            margin: '0 auto',
          }}
        />
        <Typography component='h1' variant='h5' sx={{ mt: 2 }}>
          Register a new account
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            onSubmit(values, actions)
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Box
                // component='form'
                // onSubmit={(e) => {
                //   e.preventDefault()
                //   navigate('/services')
                // }}
                sx={{ mt: 1 }}
              >
                <Field
                  as={TextField}
                  margin='normal'
                  type='text'
                  name='first_name'
                  label='First Name'
                  autoComplete='first_name'
                  fullWidth
                  error={errors.first_name && touched.first_name}
                  helperText={
                    errors.first_name && touched.first_name && errors.first_name
                  }
                />
                <Field
                  as={TextField}
                  margin='normal'
                  type='text'
                  name='last_name'
                  label='Last Name'
                  fullWidth
                  autoComplete='last_name'
                  error={errors.last_name && touched.last_name}
                  helperText={
                    errors.last_name && touched.last_name && errors.last_name
                  }
                />
                <Field
                  as={TextField}
                  margin='normal'
                  type='text'
                  name='username'
                  label='User Name'
                  fullWidth
                  autoComplete='username'
                  error={errors.username && touched.username}
                  helperText={
                    errors.username && touched.username && errors.username
                  }
                />
                <Field
                  as={TextField}
                  margin='normal'
                  name='email'
                  label='Email'
                  fullWidth
                  type='email'
                  autoComplete='email'
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  margin='normal'
                  name='password'
                  label='Password'
                  type='password'
                  fullWidth
                  autoComplete='password'
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password && errors.password
                  }
                />
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  // onClick={handleNavigate}
                  sx={{ mt: 3, mb: 2, background: '#00796b' }}
                >
                  Register
                </Button>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  align='center'
                  sx={{ mt: 2 }}
                >
                  Already have an account? <Link href='/login'>Sign in</Link>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </FadeInBox>
    </Container>
  )
}
