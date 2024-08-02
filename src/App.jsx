import React from 'react'
import './App.css'
import { therapistData } from './constants/constants'
import ServicesPage from './pages/ServicesPage'

import { lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import routes from '../routes'
import LandingPage from './pages/LandingPage'
import DefaultLayout from './Layout/DefaultLayout'
import AuthLayout from './Layout/AuthLayout'
import { LoginPage, RegisterPage } from './pages/Auth'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const ParentApp = () => {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<AuthLayout />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='*' element={<LandingPage />} />
        </Route>

        <Route element={<DefaultLayout />}>
          {routes.map((routes, index) => {
            const { path, component: Component } = routes
            return <Route key={index} path={path} element={<Component />} />
          })}
          <Route path='*' element={<LandingPage />} />
        </Route>

        <Route path='*' element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default ParentApp
