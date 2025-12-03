
import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import RootLayout from "../RootLayout/RootLayout";
import Apps from "../components/Apps/Apps";
import Installation from "../components/Installation/Installation";


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
                loader: () => fetch('/appsData.json'),
                Component: Apps
            },
            {
                path: "installation",
                Component: Installation
            }
        ]

    },
    

])
export default router;