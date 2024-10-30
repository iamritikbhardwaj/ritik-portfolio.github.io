"use client"
import {
    createBrowserRouter
} from "react-router-dom";
import React, { lazy } from "react";
import App from "@/app/page";
import Ghar from "../ui/Home";

const About = lazy(() => import("../ui/About"));
const Contact = lazy(() => import("../ui/Contact"));
const Work = lazy(() => import("../ui/Work"))


const allRoutes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'home',
                element: <Ghar />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'work',
                element: <Work />
            }
        ]
    }
];

const router = createBrowserRouter(allRoutes);
export default router;
