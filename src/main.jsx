import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Resister from './components/Resister';
import AuthProviders from './providers/AuthProviders';
import Order from './components/Order';
import PrivetRout from './routs/PrivetRout';
import Profile from './components/Profile';


const router = createBrowserRouter([

  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/resister',
        element:<Resister></Resister>
      },
      {
        path:'/profile',
        element:<PrivetRout><Profile></Profile></PrivetRout>
      },
      {
        path:'/order',
        element:<PrivetRout><Order></Order></PrivetRout>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <RouterProvider router={router} ></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
