import Admin from "@/page/Admin/Admin"
import Departments from "@/page/Admin/Departments/Departments"
import Register from "@/page/Admin/Register/Register"
import Login from "@/page/Login/Login"
import Pharmacy from "@/page/Admin/Pharmacy/Pharmacy"
import Drug from "@/page/Admin/Drug/Drug"
import Medic from "@/page/Admin/Medic/Medic"
import Inpatient from "@/page/Admin/Inpatient/Inpatient"
import Beds from "@/page/Admin/Beds/Beds"
import { Navigate } from "react-router-dom"

export const routers = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/admin',
        element: <Admin />,
        children: [
            {
                path: 'outpatient',
                element: <Register />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'departments',
                element: <Departments />
            },
            {
                path: 'medic',
                element: <Medic />
            },
            {
                path: 'inpatient',
                element: <Inpatient />
            },
            {
                path: 'beds',
                element: <Beds />
            },
            {
                path: 'pharmacy',
                element: <Pharmacy />
            },
            {
                path: 'drug',
                element: <Drug />
            },
            {
                path: '',
                element: <Navigate to='register' />
            },
        ]
    },
    {
        path: '/',
        element: <Navigate to='login' />
    }
]