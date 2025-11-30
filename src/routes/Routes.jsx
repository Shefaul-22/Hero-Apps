
import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import RootLayout from "../RootLayout/RootLayout";


const router = createBrowserRouter([

    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                Component: Home
            },
            
        ]

    },
    

])
export default router;