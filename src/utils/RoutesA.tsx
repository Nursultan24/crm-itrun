import React from 'react';
import {useRoutes} from "react-router-dom";
import Layout from "../components/Loyout/Layout";
import Groups from "../pages/Groups/Groups";
import Login from "../pages/Login/Login";
import Students from "../pages/Students/Students";
import Staff from "../pages/Staff/Staff";

const RoutesA = () => {
    const routes = useRoutes([

        {
            path: "/register",
            // element: <Register/>
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path:"/",
            element: <Layout/>,
            children :[
                {
                    path:"/groups",
                    element:<Groups/>
                },
                {
                    path:"/students",
                    element:<Students/>
                },
                {
                    path:"/staff",
                    element:<Staff/>
                }
            ]
        }
    ])
    return routes
};
export default RoutesA