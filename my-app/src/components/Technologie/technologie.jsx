import { FaReact } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri";
import { SiHtml5 } from "react-icons/si"
import { FaCss3Alt } from "react-icons/fa"
import { IoLogoJavascript } from "react-icons/io5"
import motion1 from './motion1.png'
import { RiTailwindCssFill } from "react-icons/ri"
import {motion} from 'framer-motion'


const technologie = () => {

const iconVariants = (duration) => ({
    initial : {y : -10} ,
    animate : {
        y : [10 , -10] ,
        transition: {
            duration : duration,
            ease : 'linear' ,
            repeat : Infinity ,
            repeatType : "reverse",

        },
    },
})


    return (
        <div className="bordr-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl text-white">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial = 'initial'
                animate = 'animate'
                className="rounded-2xl border-4 border-neutral-800 p-4 text-white">
                    <FaReact className="text-7xl text-cyan-400"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial = 'initial'
                animate = 'animate'
                className="rounded-2xl border-4 border-neutral-800 p-4 text-white">
                    <RiNextjsFill className="text-7xl"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(5)}
                initial = 'initial'
                animate = 'animate'
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiHtml5 className="text-7xl text-orange-600"/>
                </motion.div> 
                <motion.div 
                variants={iconVariants(4)}
                initial = 'initial'
                animate = 'animate'
                className="rounded-2xl border-4 border-neutral-800 p-4 text-white">
                    <FaCss3Alt className="text-7xl text-blue-800"/>
                </motion.div>
                <motion.div
                variants={iconVariants(4.5)}
                initial = 'initial'
                animate = 'animate' className="rounded-2xl border-4 border-neutral-800 p-4 text-white">
                    <IoLogoJavascript className="text-7xl text-yellow-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(5)}
                initial = 'initial'
                animate = 'animate' className="rounded-2xl border-4 border-neutral-800 p-4 text-white">
                   <img src={motion1} alt="" className="h-[71px]" />
                </motion.div>
                <motion.div 
                variants={iconVariants(2.5)}
                initial = 'initial'
                animate = 'animate'
                className="rounded-2xl border-4 border-neutral-800 p-4 text-white">
                    <RiTailwindCssFill className="text-7xl text-cyan-400"/>
                </motion.div>
            </div>
        </div>
    )
}

export default technologie