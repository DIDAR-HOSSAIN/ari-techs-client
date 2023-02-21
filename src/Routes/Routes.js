import { createBrowserRouter } from "react-router-dom";
import Home from "../FrontEnd/components/Home/Home";
import Main from "../FrontEnd/Layout/Main";
import Services from "../FrontEnd/components/Services/Services";
import Slider from "../FrontEnd/Slider/Slider";
import About from "../FrontEnd/components/About/About";
import Contact from "../FrontEnd/components/Contact/Contact";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            }
        ]
    }
    
])

export default router;