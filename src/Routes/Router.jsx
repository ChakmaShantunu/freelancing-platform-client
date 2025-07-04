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
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import DashBoardLayout from "../Layouts/DashBoardLayout";
import MyTasks from "../Pages/Dashboard/Tasks/MyTasks";
import MyBids from "../Pages/Dashboard/MyBids/MyBids";
import TotalTasks from "../Pages/Dashboard/TotalTasks/TotalTasks";

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
                loader: () => fetch('https://assignment-ten-grapes-server.vercel.app/tasks'),
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
                loader: ({ params }) => fetch(`https://assignment-ten-grapes-server.vercel.app/tasks/${params.id}`),
                element: <PrivateRoute>
                    <UpdateTask></UpdateTask>
                </PrivateRoute>
            },
            {
                path: '/tasks/:id',
                loader: ({ params }) => fetch(`https://assignment-ten-grapes-server.vercel.app/tasks/${params.id}`),
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
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <DashBoardLayout></DashBoardLayout>
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <PrivateRoute>
                    <MyTasks></MyTasks>
                </PrivateRoute>
            },
            {
                path: 'myBids',
                element: <PrivateRoute>
                    <MyBids></MyBids>
                </PrivateRoute>
            },
            {
                path: 'totalTasks',
                Component: TotalTasks,
                loader: () => fetch('https://assignment-ten-grapes-server.vercel.app/tasks'),
            }
        ]

    },
    {
        path: '*',
        Component: NotFoundPage
    },
])