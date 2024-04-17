import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Home/Home';
import ErrorPage from './ErrorPage/ErrorPage';
import Login from './Authentication/Login';
import Registration from './Authentication/Registration';
import AuthProvider from './Providers/AuthProvider';
import UpdateProfile from './Update Profile/UpdateProfile';
import PrivateRoute from './Update Profile/PrivateRoute';
import Profile from './Profile/Profile';
import EstateDetails from './Home/EstateDetails';
import Features from './Features/Features';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/updateProfile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/features",
        element: <Features></Features>
      },
      {
        path: '/estateDetails/:id',
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch('/data.json')
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
