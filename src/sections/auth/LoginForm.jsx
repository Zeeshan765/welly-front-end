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
import { Post } from '../../actions/apiActions'
import { API_URLS } from '../../constants/API_URLS'
import { useSnackbar } from 'notistack'

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

export default function LoginSection() {
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
  // Define Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  })

  // Initial form values
  const initialValues = {
    email: '',
    password: '',
  }

  // Handle login form submission
  const handleLogin = (values) => {
    try {
      Post(
        values,
        API_URLS.login,
        (resp) => {
          console.log('resp', resp)
          enqueueSnackbar('Login successful', { variant: 'success' })
          localStorage.setItem('userId', resp.userId)
          localStorage.setItem('user', resp.first_name + ' ' + resp.last_name)
          navigate('/home/app')
        },
        (error) => {
          enqueueSnackbar('Login failed', { variant: 'error' })
        }
      )
    } catch (error) {
      enqueueSnackbar('Something went wrong', { variant: 'error' })
    }
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
          Sign in to your account
        </Typography>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            handleLogin(values)
          }}
        >
          {({
            values,
            handleChange,
            errors,
            touched,
            isSubmitting,
            handleSubmit,
          }) => (
            <Form>
              <Box sx={{ mt: 1 }}>
                <Field
                  as={TextField}
                  fullWidth
                  variant='outlined'
                  margin='normal'
                  label='Email'
                  name='email'
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  fullWidth
                  variant='outlined'
                  margin='normal'
                  label='Password'
                  type='password'
                  name='password'
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Box>
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2, background: '#00796b' }}
                >
                  Sign In
                </Button>
                <Typography
                  variant='body2'
                  color='textSecondary'
                  align='center'
                  sx={{ mt: 2 }}
                >
                  Not a member? <Link href='/register'>Register</Link>
                </Typography>
              </Box>
            </Form>
          )}
        </Formik>
      </FadeInBox>
    </Container>
  )
}
