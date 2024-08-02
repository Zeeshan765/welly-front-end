import React from 'react'
import { RegisterForm } from '../../sections/auth'
import { useNavigate } from 'react-router-dom'
import { Post } from '../../actions/apiActions'
import { API_URLS } from '../../constants/API_URLS'
import { useSnackbar } from "notistack";
function RegisterPage() {
    const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate()
  const handleSignup = (values, actions) => {
    try {
      
      Post(
        values,
        API_URLS.signup,
        (resp) => {
         enqueueSnackbar("Signup successful", { variant: "success" });
          navigate('/login')
        },
        (error) => {
            enqueueSnackbar("Signup failed", { variant: "error" });
        }
      )
    } catch (error) {
        enqueueSnackbar("Signup failed", { variant: "error" });
    }
  }

  return <RegisterForm onSubmit={(values, actions) => handleSignup(values, actions)} />
}

export default RegisterPage
