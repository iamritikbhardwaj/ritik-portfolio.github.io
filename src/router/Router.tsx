import {
    createBrowserRouter
} from "react-router-dom";
import React, { lazy } from "react";

const Home = lazy(() => import("../ui/Home"));
const Header = lazy(() => import("../ui/Header"));

// Placeholder component for the '/about' route
const About = () => <div>About Page</div>;

const allRoutes = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/header',
        element: <Header />
    },
];

const router = createBrowserRouter(allRoutes);
