import about from './about.jpg'
import {motion} from 'framer-motion'
const product = () => {


    return (
      <div className="border-b border-neutral-900 pb-4">
        <h2 className="py-20 text-center text-4xl text-white">About   <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div
            initial={{x : -200 , opacity : 0}}
            whileInView={{x : 1 , opacity : 1}}
            transition={{duration : 0.5}} 
            viewport={{once : true}}
            className="w-full lg:w-1/2 lg:p-8">
           
                <div className="flex items-center justify-center">
                    <img className='rounded-2xl' src={about} />
                </div>
            </motion.div>
            <div className='w-full lg:w-1/2'>
                    <motion.div
                    initial={{x : 100 , opacity : 0}}
                    whileInView={{x :  0, opacity : 1}}
                    transition={{duration : 0.7  }} 
                    viewport={{once : true}}
                    className='flex justify-center lg:justify-start '>
                        <p className='my-5 max-w-xl py-10 text-white'>I am a dedicated and versatile Front-end developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React,. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.</p>
                    </motion.div>
                </div>
             </div>
      </div>
    )
}

export default product