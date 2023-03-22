import { createBrowserRouter } from "react-router-dom";
import Home from "../FrontEnd/components/Home/Home";
import Main from "../FrontEnd/Layout/Main";
import Services from "../FrontEnd/components/Services/Services";
import Slider from "../FrontEnd/Slider/Slider";
import About from "../FrontEnd/components/About/About";
import Contact from "../FrontEnd/components/Contact/Contact";
import Login from "../BackEnd/Auth/User/Login/Login";
import SignUp from "../BackEnd/Auth/User/SignUp/SignUp";
import Dashboard from "../BackEnd/Dashboard/Dashboard";
import DisplayError from "../DisplayError/DisplayError";
import ManageBuyerRequest from "../BackEnd/BuyerRequest/ManageBuyerRequest";
import AllUser from "../BackEnd/Auth/User/AllUser/AllUser";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/slider',
                element: <Slider></Slider>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        errorElement: <DisplayError></DisplayError>,
        children:[
            {
                path: '/dashboard',
                element: <ManageBuyerRequest></ManageBuyerRequest>
            },
            {
                path: '/dashboard/users',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
            }
        ]
    }
    
])

export default router;