import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home/Home";
import Login from "../components/LogIn/Login";
import Register from "../components/Register/Register";
import BrowseTask from "../Pages/BrowseTask/BrowseTask";
import PostedTask from "../Pages/PostedTask/PostedTask";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AddTask from "../Pages/AddTask/AddTask";
import TaskDetails from "../Pages/TaskDetails/TaskDetails";
import UpdateTask from "../components/UpdateTask/UpdateTask";

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
                loader: () => fetch('http://localhost:3000/tasks'),
                element: <BrowseTask></BrowseTask>
            },
            {
                path: '/postedTask',
                element: <PrivateRoute>
                    <PostedTask></PostedTask>
                </PrivateRoute>
            },
            {
                path: '/updateTask/:id',
                loader:({params}) => fetch(`http://localhost:3000/tasks/${params.id}`),
                element: <UpdateTask></UpdateTask>
            },
            {
                path: '/tasks/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/tasks/${params.id}`),
                element: <PrivateRoute>
                    <TaskDetails></TaskDetails>
                </PrivateRoute>
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