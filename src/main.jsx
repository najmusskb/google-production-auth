import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Main from './layouts/Main';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path : '/',
        element :<Home></Home>
      },
      {
        path : 'header',
        element :<Home></Home>
      },
      {
        path : 'login',
        element :<Login></Login>
      },

    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
