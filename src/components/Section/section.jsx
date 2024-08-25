import {motion } from 'framer-motion'
import img from './img.jpg'

const section = () => {


    return (
       <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <motion.div
            initial={{x : -100 , opacity : 0}}
            animate={{x : 1 , opacity : 1}}
            transition={{duration : 0.5}}
            className='w-full lg:w-1/2 items-center'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 
                  
                    className='pb-6 text-6xl font-thin tracking-tight lg:mt-16
                    lg-text-8xl text-white font-bold'>Othmane charfaoui</h1>
                    <span 
                    
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                    bg-clip-text text-4xl text-transparent tracking-tight'>Front-end developer</span>
                    <p className='text-white my-2 mx-w-xl py-6 font-light'>I am a passionate Front-end  developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js . My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences</p>
                </div>
            </motion.div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <motion.div 
                initial={{x : 200 , opacity : 0}}
                animate={{x :  0, opacity : 1}}
                transition={{duration : 0.7  }}
                className='flex justify-center h-[450px]  rounded-lg'>
                    <img className='rounded-2xl' src={img}/>
                </motion.div>
                
            </div>
        </div>
       </div>
    )
}

export default section