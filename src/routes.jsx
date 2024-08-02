import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import AboutUs from "./pages/AboutUs";
import { LoginPage, RegisterPage } from "./pages/Auth";
import AppointmentsPage from "./pages/AppointmentsPage";
// Import your components for each route

const routes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/appointments",
    element: <AppointmentsPage />,
  },
  {
    path: "/contact",
    component: () => <div>Contact</div>,
  },
]);
export default routes;
