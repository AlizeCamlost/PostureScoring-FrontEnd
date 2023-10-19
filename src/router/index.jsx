import "../../node_modules/picnic/picnic.min.css"
import { createBrowserRouter } from 'react-router-dom'
import Login from '../components/LoginPage/Login'
import Layout from '../components/Layout/Layout'
import Statistics from '../components/Layout/Statistics/Statistics'
import Profile from '../components/Layout/Profile/Profile'
import Exercises from '../components/Layout/Exercises/Exercises'
import Camera from '../components/Camera/Camera'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/Layout',
        element: <Layout />,
        children: [
        ]
    },
    {
        path: '/Exercises',
        element: <Exercises />,
    },
    {
        path: '/Statistics',
        element: <Statistics />
    },
    {
        path: '/Profile',
        element: <Profile />
    },
    {
        path: '/Camera/:exNumber',
        element: <Camera />
    }
])

export default router


