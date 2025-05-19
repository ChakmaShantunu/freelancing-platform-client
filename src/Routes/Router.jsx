import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Login from "../components/LogIn/Login";
import Register from "../components/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/log-in',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },

        ]
    }
])