import React from "react";

import pic from "../../public/photo.avif";

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped, Typed } from "react-typed";

export default function Home() {
    return (
        <>
            <div 
                name="Home"
                className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome In My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello, I'm a </h1>
                            {/* <span className="text-red-700 font-bold"> Developer</span> */}
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Developer", "Chai Lover", "Programmer", "Coder"]}
                                typeSpeed={50}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify">
                        Seeking an opportunity to showcase and apply my expertise that is in the field of computers, and hence, make an effective use of the technical skills that I have developed over the years in order to get the best out of myself as a software engineer.{" "}
                        </p>
                        <br />

                        {/* social media icons */}
                        <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                            <div className="space-y-2">
                            <h1 className="font-bold">Available On</h1>
                            <ul className="flex space-x-6 mt-2">
                                <li> 
                                    <a href="https://www.facebook.com/"
                                       target="_blank">
                                    <FaFacebookSquare className="text-2xl cursor-pointer hover:scale-110 duration-200"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/"
                                        target="_blank">
                                    <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com/"
                                        target="_blank">
                                    <FaYoutube className="text-2xl cursor-pointer hover:scale-110 duration-200"/>
                                    </a>
                                </li>
                                <li> 
                                    <a href="https://t.me/"
                                        target="_blank">
                                    <FaTelegram className="text-2xl cursor-pointer hover:scale-110 duration-200"/>
                                    </a>
                                </li>
                            </ul>
                            </div>

                            <div className="space-y-2">
                            <h1 className="font-bold">Currently working on</h1>
                            <div className="flex space-x-5">
                                <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                                <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                                <RiTailwindCssFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                                <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
                            </div>
                            </div>
                        </div>

                    </div>

                    <div className=" md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                        <img 
                            src={pic} 
                            className='rounded-full md:w-[450px] h-[450px]' />
                    </div>

                </div>
                <br />
                <hr />
            </div>
        </>
    );
}
