import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Header() {

    const navigate = useNavigate();


    return (
            <div className="px-4 md:px-8 lg:px-12 bg-slate-800 dark:bg-green-900">
                <nav className="m-4 py-4 text-white flex justify-between">
                    <ul className="block md:flex">
                        <li><button
                         onClick={() => navigate("/home")} 
                         className="m-2 text-3xl hover:text-5xl">Home</button></li>
                        <li><button
                        onClick={() => navigate("/about")} 
                        className="m-2 text-3xl hover:text-5xl">About</button></li>
                        <li><button
                        onClick={() => navigate("/contact")} 
                        className="m-2 text-3xl hover:text-5xl">Contact</button></li>
                        <li><button
                        onClick={() => navigate("/work")} 
                        className="m-2 text-3xl hover:text-5xl">Work</button></li>
                    </ul>
                    <div className="block md:flex">
            <a className="m-2 text-3xl hover:text-5xl" href="https://www.linkedin.com/in/ritik-singh-10b333227" target="_blank"><FaLinkedinIn /></a>
            <a className="m-2 text-3xl hover:text-5xl" href="https://github.com/iamritikbhardwaj" target="_blank"><FaGithub /></a>
        </div>
                </nav>
            </div>
    );
}
