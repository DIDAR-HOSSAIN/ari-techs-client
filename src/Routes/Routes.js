import { createBrowserRouter } from "react-router-dom";
import Home from "../FrontEnd/components/Home/Home";
import Main from "../FrontEnd/Layout/Main";
import Services from "../FrontEnd/components/ServiceCategories/Services/Services";
import Slider from "../FrontEnd/Slider/Slider";
import About from "../FrontEnd/components/About/About";
import Login from "../BackEnd/Auth/User/Login/Login";
import SignUp from "../BackEnd/Auth/User/SignUp/SignUp";
import Dashboard from "../BackEnd/Dashboard/Dashboard";
import DisplayError from "../DisplayError/DisplayError";
import AllUser from "../BackEnd/Auth/User/AllUser/AllUser";
import PrivateRoutes from "./PrivateRoutes";
import AdminRoutes from "./AdminRoutes";
import ManageContacts from "../FrontEnd/components/Contact/ManageContacts";
import CreateContact from "../FrontEnd/components/Contact/CreateContact";
import UpdateContact from "../FrontEnd/components/Contact/UpdateContact";
import CreateService from "../FrontEnd/components/ServiceCategories/Services/CreateService";
import ManageServices from "../FrontEnd/components/ServiceCategories/Services/ManageServices";
import UpdateService from "../FrontEnd/components/ServiceCategories/Services/UpdateService";
import WhoWeAre from "../FrontEnd/components/WhoWeAre/WhoWeAre";
import ServiceDetail from "../FrontEnd/components/ServiceCategories/Services/ServiceDetail";



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
                path: '/whoWeAre',
                element: <WhoWeAre></WhoWeAre>
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
                element: <CreateContact></CreateContact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/serviceDetail/:id',
                element: <ServiceDetail></ServiceDetail>,
                loader: ({params}) => fetch(`https://ari-techs-server.vercel.app/services/${params.id}`)
                // loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)

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
                element: <AdminRoutes><ManageContacts></ManageContacts></AdminRoutes>
            },
            {
                path: '/dashboard/update/:id',
                element: <UpdateContact></UpdateContact>,
                loader: ({params}) => fetch(`https://ari-techs-server.vercel.app/contacts/${params.id}`)
            },
            {
                path: '/dashboard/users',
                element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
            },
            {
                path: '/dashboard/createService',
                element: <CreateService></CreateService>
            },
            {
                path: '/dashboard/manageService',
                element: <ManageServices></ManageServices>
            },
            {
                path: '/dashboard/updateService/:id',
                element: <UpdateService></UpdateService>,
                loader: ({params}) => fetch(`https://ari-techs-server.vercel.app/services/${params.id}`)
            },
        ]
    }
    
])

export default router;