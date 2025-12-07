
import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import Apps from "../components/Apps/Apps";
import AppDetails from "../components/AppDetails/AppDetails";
import InstalledApps from "../components/InstalledApps/InstalledApps";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const router = createBrowserRouter([

    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                loader: () => fetch('/appsData.json'),
                Component: Home
            },
            {
                path: "apps",
                Component: Apps
            },
            
            {
                path: "appsDetails/:id",
                Component: AppDetails
            },

            {
                path: "apps/appsDetails/:id",
                Component: AppDetails
            },
            {
                path: "installation",
                loader: () => fetch('/appsData.json'),
                Component: InstalledApps
            },
            {
                path: "*",
                Component: ErrorPage
            }
        ]

    },
    

])
export default router;