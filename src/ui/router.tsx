import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import path from "path";

const Home = lazy(() => import("../app/page"));
const Ghar = lazy(() => import("@/ui/Home"));
const About = lazy(() => import("@/ui/About"));
const Contact = lazy(() => import("@/ui/Contact"));
const Work = lazy(() => import("@/ui/Work"));

const allRoute = [
    {
        path: '/',
        element: <Home />,
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
]

export const router = createBrowserRouter(allRoute);