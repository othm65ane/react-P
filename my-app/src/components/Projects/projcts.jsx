import {PROJECTS} from '../Constants'
import {motion} from 'framer-motion'

const projects = () => {

      
    return (
       <div className="border-b border-neutral-900 pb-4 text-white">
        <motion.h2
        initial = {{y : -100 , opacity : 0}}
        whileInView={{y : 0 , opacity : 1}}
        className="my-20 text-center text-4xl">
            Projects
        </motion.h2>
        <div>{PROJECTS.map((projects , index) => (
<div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
    <motion.div 
    initial={{opacity : 0 , x : -100}}
    whileInView={{opacity : 1 , x : 0}}
    transition={{duration : 0.7}}
    viewport={{once : true}}

    className='w-full lg:w-1/4'>
    <img 
    src={projects.image} 
    alt={projects.title}
    height={200}
    width={250}
    className='mb-6 rounded'
    />
    </motion.div>
    <motion.div
    initial={{opacity : 0 , x : 100}}
    whileInView={{opacity : 1 , x : 0}}
    transition={{duration : 0.7}}
    viewport={{once : true}}
    className='w-full max-w-xl lg:3/4'>
        <h6 className='mb-2'>{projects.title}</h6>
        <h6 className='mb-4 text-neutral-400'>{projects.description}</h6>
        {projects.technologies.map((tech,index)=> (
            <span key={index} className='mr-2 rounded bg-neutral-700 px-2 py-1 text-sm font-medium text-purple-500'>
                {tech}
            </span>
        ))}
    </motion.div>
</div>


        ))}
        </div>
       </div>
    )
}

export default projects