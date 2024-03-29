import React from 'react';
import { HiArrowNarrowRight, HiArrowRight } from 'react-icons/hi';
import me from '../assets/MyAvatar.png';
import { Link } from "react-scroll"; 


const Home =()=> {
    return (
        <div
        name ="home"
        className="h-screen w-full bg-[#0a192f]"
        >
           <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    Software Developer with specialization in Game Development.
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                I am a dedicated software developer specializing in Game Development.
                 Presently, I am contributing my expertise as a software engineer at
                  GreenIsland, Belgium. Throughout my journey, I have undertaken 
                  numerous projects in a diverse range of game engines, including
                   Unreal Engine 4/5, Unity Engine, Overlord Engine, and even 
                   custom-made engines. This rich experience has equipped me with 
                   a wide-ranging skill set, enabling me to thrive in the 
                   ever-evolving world of game development.
                </p>
                <div>
                    <Link
                to="about"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
                About Me
                <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
                </span>
                    </Link>
                </div>
            </div>
    `       <div>
                <img 
                src={me}
                alt="my profile"
                className="roundex-2x1 mx-auto w-2/3 md:w-full"/>
                </div>
            </div>     
        </div>
);
};

export default Home;