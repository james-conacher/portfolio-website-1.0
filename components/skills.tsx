'use client'

import React from "react";
import {motion} from "framer-motion";
import Skill from "./skill";


type Props={

};


export default function Skills({}:Props){
    return(
        <motion.div
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:1.5,
        }}
        className="h-screen flex relative flex-col text-center md: text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-2xl top-10">
                Skills
            </h3>
            <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm">
                Below are the skills that I am proficient in
            </h3>
            <div className="grid grid-cols-4 gap-5">
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </motion.div>
    )
}