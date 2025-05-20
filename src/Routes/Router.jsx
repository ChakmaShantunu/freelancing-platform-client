import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Login from "../components/LogIn/Login";
import Register from "../components/Register/Register";
import AddTask from "../Pages/AddTask/AddTask";
import BrowseTask from "../Pages/BrowseTask/BrowseTask";
import PostedTask from "../Pages/PostedTask/PostedTask";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

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
                path: '/addTask',
                element: <PrivateRoute>
                    <AddTask></AddTask>
                </PrivateRoute>
            },
            {
                path: '/browseTask',
                Component: BrowseTask
            },
            {
                path: '/postedTask',
                Component: PostedTask
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