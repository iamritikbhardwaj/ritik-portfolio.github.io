import React from "react";
import { GiSwitchWeapon } from "react-icons/gi";
import { SiNextdotjs, SiMui, SiSpring, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import { FaReact, FaLinux, FaGitAlt, FaNodeJs, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GoProject } from "react-icons/go";

const projects = [
    {
        name: 'Message Screen',
        desc: 'This project includes a message screen where name of users are fetched by fetching data from Api. Users can send text messages to each other which will be stored in database(mongoDb)'
    },
    {
        name: 'User CRUD',
        desc: 'This projects features a dashboard where CRUD operation is performed on user. This project show cases an interactive UI, responsive backend and database'
    },
    {
        name: 'Dr.Code',
        desc: 'Dr.Code'
    },
]

export default function Header() {
    return (
        <div>
            <div className="px-4 md:px-8 lg:px-12 dark:bg-green-900">
                <nav className="m-4 py-4 dark:text-white block md:flex justify-between">
                    <ul className="block md:flex">
                        <li><a href="#home" className="m-2 text-3xl hover:text-5xl">Home</a></li>
                        <li><a href="#about" className="m-2 text-3xl hover:text-5xl">About</a></li>
                        <li><a href="#contact" className="m-2 text-3xl hover:text-5xl">Contact</a></li>
                        <li><a href="#work" className="m-2 text-3xl hover:text-5xl">Work</a></li>
                    </ul>
                    <div className="block md:flex">
            <a className="m-2 text-3xl hover:text-5xl" href="https://www.linkedin.com/in/ritik-singh-10b333227" target="_blank"><FaLinkedinIn /></a>
            <a className="m-2 text-3xl hover:text-5xl" href="https://github.com/iamritikbhardwaj" target="_blank"><FaGithub /></a>
        </div>
                </nav>
            </div>
            <section id="home" className="text-center px-5 py-16">
                <div className="flex-col">
                    <h1 className="text-4xl">Ritik Singh</h1>
                    <p className="text-xl">I speak in <code className="text-cyan-500 text-2xl">&lt;code&gt;</code> so you don't have to.</p>
                </div>
            </section>
            <section className="text-center px-5 py-16 text-emerald-200" id="about">
                <div className="flex-col">
                    <h2 className="text-3xl mb-2">About Me</h2>
                    <p className="text-xl mb-4">I am a Full-Stack Developer based in India, specializing in building exceptional digital experiences. I enjoy using my skill-set to empower people to accomplish their goals.</p>
                </div>
            </section>
            <section id="work" className="text-center px-5 py-16 ">
                <h2 className="mb-2 text-3xl">Featured Projects</h2>
                <div className=" p-5 block justify-center text-center overflow-x-auto">
                {projects.map((project, index) =>(<div className="my-3" key="index"><div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <GoProject className="h-6 w-6 text-white" />
    </span>
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">{project.name}</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
     {project.desc}
  </p>
</div></div>))}
                </div>
                <div className="px-3 mx-3 text-center">
                <div className="flex text-5xl text-center justify-center my-2">
                    <GiSwitchWeapon />
                    <h1 className="mx-1">
                        My Weapons
                    </h1>
                    </div>
                    
                    <div className="flex overflow-x-auto justify-center">
                        <SiMongodb className="m-3 w-28 h-28" />
                        <SiExpress className="m-3 w-28 h-28" />
                        <FaReact className="m-3 w-28 h-28" />
                        <FaNodeJs className="m-3 w-28 h-28" />
                        <SiNextdotjs className="m-3 w-28 h-28" />    
                        <SiMui className="m-3 w-28 h-28"/>             
                        <FaLinux className="m-3 w-28 h-28" />
                        <SiSpring className="m-3 w-28 h-28" />                        
                        <SiMysql className="m-3 w-28 h-28" />
                        <FaGitAlt className="m-3 w-28 h-28"/>
                    </div>
                </div>
            </section>
            <section className="text-center px-5 py-16">
        <h2 className="text-4xl mb-2">Get My Resume</h2>
        <p className="mb-4 text-xl">Click the download button to get a copy of my resume.</p>
                <a type="button" className="bg-indigo-500 p-4 mt-6 rounded" href="Ritik's Resume.pdf">Download</a>
    </section>
            <footer className="bg-slate-700 text-center h-19 p-4">
        <p>Designed and Developed by Ritik Singh</p>
    </footer>
        </div>
    );
}
