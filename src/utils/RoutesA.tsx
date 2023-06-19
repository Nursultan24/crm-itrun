import React from 'react';
import {useRoutes} from "react-router-dom";

const RoutesA = () => {
    const routes = useRoutes([

        {
            path: "/register",
            // element: <Register/>
        },
        {
            path:"/",
            // element: <Layout/>
            children :[
                {
                    path:"/Home",
                    // element:<Home/>
                }
            ]
        }
    ])
    return routes
};
export default RoutesA