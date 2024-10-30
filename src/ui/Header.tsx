import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Header() {

    // const navigate = useNavigate();

    // const handleNext = () => {
    //     navigate(e.target.href)
    // }

    return (
            <div className="px-4 md:px-8 lg:px-12 dark:bg-green-900">
                <nav className="m-4 py-4 dark:text-white block md:flex justify-between">
                    <ul className="block md:flex">
                        <li><a href="home"
                        //  onClick={} 
                         className="m-2 text-3xl hover:text-5xl">Home</a></li>
                        <li><a href="about" 
                        // onClick={} 
                        className="m-2 text-3xl hover:text-5xl">About</a></li>
                        <li><a href="contact" 
                        // onClick={} 
                        className="m-2 text-3xl hover:text-5xl">Contact</a></li>
                        <li><a href="work" 
                        // onClick={} 
                        className="m-2 text-3xl hover:text-5xl">Work</a></li>
                    </ul>
                    <div className="block md:flex">
            <a className="m-2 text-3xl hover:text-5xl" href="https://www.linkedin.com/in/ritik-singh-10b333227" target="_blank"><FaLinkedinIn /></a>
            <a className="m-2 text-3xl hover:text-5xl" href="https://github.com/iamritikbhardwaj" target="_blank"><FaGithub /></a>
        </div>
                </nav>
            </div>
    );
}
