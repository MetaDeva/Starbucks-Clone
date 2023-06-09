import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Menu from './Pages/Menu/Menu';
import Merchandise from './Pages/Merchandise/Merchandise';
import Rewards from './Pages/Rewards/Rewards';

// Footer
import Company from './FooterPages/Company/Company';
import Stories from './FooterPages/Stories/Stories';
import Service from './FooterPages/Service/Service';

import Order from './FooterPages/Order/Order'
import Delivery from './FooterPages/Delivery/Delivery'
import Gifts from './FooterPages/Gifts/Gifts'
import Partnership from './FooterPages/Partnership/Partnership'
import Careers from './FooterPages/Careers/Careers';

import Login from './FooterPages/Login/Login'
import SignUp from './FooterPages/Sign Up/Sign-up'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/merchandise',
    element: <Merchandise />,
  },
  {
    path: '/rewards',
    element: <Rewards />,
  },

  // Footer
  // 1st
  {
    path: '/company',
    element: <Company />,
  },
  {
    path: '/stories',
    element: <Stories />,
  },
  {
    path: '/service',
    element: <Service />,
  },

  // 2nd
  {
    path: '/order',
    element: <Order />,
  },
  {
    path: '/delivery',
    element: <Delivery />,
  },
  {
    path: '/gifts',
    element: <Gifts />,
  },
  {
    path: '/partnership',
    element: <Partnership />,
  },

  {
    path: '/careers',
    element: <Careers />,
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/signUp',
    element: <SignUp />,
  },

  {
    path: '*',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
