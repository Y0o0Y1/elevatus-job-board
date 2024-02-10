import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom"

const AllJobs = lazy(() => import("../pages/AllJobs"));
const JobDetails = lazy(() => import("../pages/JobDetails"));
const MainLayout = lazy(() => import("../layout/MainLayout"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"))


const mainLayoutPages = [
    {
        element: <AllJobs />,
        path: "/jobs"
    },
    {
        element: <JobDetails />,
        path: "/jobs/:id"
    },
]

const pages: RouteObject[] = [
    {
        element: <Navigate replace to={"/jobs"} />,
        path: "/"
    },
    {
        element: <MainLayout />,
        children: [
            ...mainLayoutPages,
            { path: "*", element: <ErrorPage /> }
        ]
    },

]

export { pages }