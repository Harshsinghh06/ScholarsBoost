import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import RequiredLayout from './layout/required_layout'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/AboutUs'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Dashboard from './pages/Dashboard'
import Blog from './pages/Blog'
import Policy from './pages/Policy'
import Register from './pages/Register'

function App() {
  const router = createBrowserRouter([
    {
     path: "/",
     element: <Layout/>,
     children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/policy",
        element: <Policy/>
      }
     ]
    },
    {
      path: "/",
      element: <RequiredLayout/>,
      children: [
        {
          path: "/profile/:id",
          element:<Profile/>
        },
        {
          path: "/dashboard/:id",
          element:<Dashboard/>
        },
        
      ]
    }
  ])

  return <>
  <RouterProvider router={router}/>
  </>
}

export default App
