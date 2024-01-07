import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Root from './routes/root.jsx'
import Index from './routes/index.jsx'
import Login from './routes/login.jsx'
import ErrorPage from './routes/error.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/> ,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <Login/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
