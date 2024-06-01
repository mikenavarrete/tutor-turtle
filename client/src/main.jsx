import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Profile from './pages/Profile.jsx';
import ErrorPage from './pages/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />
      },
       {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/profiles/:profileId',
        element: <Profile />
      }
    ]
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
