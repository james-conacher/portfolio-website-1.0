"use client"

import React from "react";
import {motion} from "framer-motion"
import ExperienceCard from "./experience-card";

type Props={

}

function WorkExperience({}:Props){
    return(
        <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{
            duration:1.5,
        }}>
            <h3 className="absolute uppercase tracking-[20px] text-gray-500 text-2xl top-10">
                Experience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[lightblue]/80">
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
                <ExperienceCard/>
            </div>
        </motion.div>
    )
}

export default WorkExperience;