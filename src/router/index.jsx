import { createBrowserRouter } from 'react-router-dom'
import Login from '../components/LoginPage/Login'
import Layout from '../components/Layout/Layout'
import Home from '../components/Layout/Home/Home'
import Statistics from '../components/Layout/Statistics/Statistics'
import Profile from '../components/Layout/Profile/Profile'
import Exercises from '../components/Layout/Exercises/Exercises'
import ExCard from '../components/Layout/Exercises/ExCard'
import ExDetail from '../components/Layout/Exercises/ExDetail'
import ExRecord from '../components/Layout/Exercises/ExRecord'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
    },
    {
        path: '/Layout/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'Exercises',
                element: <Exercises />,
                children: [
                    {
                        path: 'ExCard',
                        element: <ExCard />,
                        children: [
                            {
                                index: true,
                                element: <ExDetail />
                            },
                            {
                                path: 'ExRecord',
                                element: <ExRecord />
                            }
                        ]
                    }
                ]
            },
            {
                path: 'Statistics',
                element: <Statistics />
            },
            {
                path: 'Profile',
                element: <Profile />
            },
        ]
    },
    // {
    //     path: '/Home',
    //     element: <Layout />,

    // },
    // {
    //     path: '/about/:id',
    //     element: <About />,
    // },
    // {
    //     path: '*',
    //     element: <NotFound />
    // }
])

export default router