
import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import Apps from "../components/Apps/Apps";
import Installation from "../components/Installation/Installation";
import AppDetails from "../components/AppDetails/AppDetails";


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
                path: "installation",
                Component: Installation
            },
            {
                path: "appsDetails/:id",
                Component: AppDetails
            },

            {
                path: "apps/appsDetails/:id",
                Component: AppDetails
            }
        ]

    },
    

])
export default router;