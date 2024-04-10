import React from "react"; 
import {motion} from "framer-motion"

type Props={
    
};

export default function ExperienceCard({}:Props){
    return(
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        viewport={{
            once:true,
        }}
        src="ht.tps://media.licdn.com/dms/image/D4D03AQHg7v6PJ6CReg/profile-displayphoto-shrink_400_400/0/1709061861736?e=1717632000&v=beta&t=FpUMtzjFCSzFRWw4vLW2ic8sEjgzxQRxE53eH8WyUAQ"
        alt="image descripttion"
        className="w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">
                Job Title
            </h4>
            <p className="font-bold text-2xl mt-1">
                Company
            </p>
            <div className="flex space-x-2 my-2">
                <img 
                className="h-10 w-10 rounded-full"
                src="ht.tps://media.licdn.com/dms/image/D4D03AQHg7v6PJ6CReg/profile-displayphoto-shrink_400_400/0/1709061861736?e=1717632000&v=beta&t=FpUMtzjFCSzFRWw4vLW2ic8sEjgzxQRxE53eH8WyUAQ"
                alt=""/>
            </div>
            <p className="uppercase py-5 text-gray-300">Started Work - Ended Work</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
            </ul>
        </div>
    </article>
    )
}