"use client"

import React from "react";
import {motion} from "framer-motion";
import heroPicture from '../public/profile-picture.png' ;
import Image from "next/image";

type Props ={

}

export default function About({}:Props){
    return(
        <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5
        }}
        className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center text-justify">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.img
            src="https://media.licdn.com/dms/image/D4D03AQHg7v6PJ6CReg/profile-displayphoto-shrink_400_400/0/1709061861736?e=1717632000&v=beta&t=FpUMtzjFCSzFRWw4vLW2ic8sEjgzxQRxE53eH8WyUAQ"
            initial={{
                x:-200, 
                opacity:0,
            }}
            transition={{
                duration:1.2,
            }}
            whileInView={{
                x:0,
                opacity:1,
            }}
            viewport={{
                once:true,
            }}
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lf md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />

            <div className="space-y-10 px-0 md:px-10 ">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[light-blue]/50">little</span> background
                </h4>
                <p className="text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </motion.div>
    )

}