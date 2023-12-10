import { createBrowserRouter } from "react-router-dom";
import Component from "../layout/Component/Component";
import Accordian from "../pages/Accordian/Accordian";

export const routes =  createBrowserRouter([
    {
        path: '/',
        element: <Component />,
    
        children: [
            {
                path: '',
                element: <Accordian />


            }
        ]
    }
])