import {motion} from 'framer-motion'
import {CONTACT} from '../Constants'


const navbar = () => {


    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h6 
            initial = {{y : 100 , opacity : 0}}
            whileInView={{y : 0 , opacity : 1}}
            transition={{duration: 0.5}}
            className="my-10 text-center text-white text-4xl">Get in touch</motion.h6>
            <div className="text-center tacking-tighter text-white">
                <motion.p
                whileInView={{opacity : 1 , x : 0}}
                initial={{opacity : 0 , x : -100}}
                transition={{duration : 0.3}}
                className="my-4">{CONTACT.address}</motion.p>
                <motion.p 
                 whileInView={{opacity : 1 , x : 0}}
                 initial={{opacity : 0 , x : 100}}
                 transition={{duration : 0.3}}
                className="my-4">{CONTACT.phoneNo}</motion.p>
                <motion.a 
                 whileInView={{opacity : 1 , x : 0}}
                 initial={{opacity : 0 , x : -100}}
                 transition={{duration : 0.3}}
                href="#" className='border-b'>{CONTACT.email}</motion.a>


            </div>
       </div>
    )
}

export default navbar