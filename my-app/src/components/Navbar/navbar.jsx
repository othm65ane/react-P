import {motion} from 'framer-motion'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const navbar = () => {


    return (
       <nav className='mb-20 flex items-center justify-between py-6 text-white'> 
       <div className='flex flex-shrink-0 items-center'>
        <h1 className='text-[30px] font-bold'>Oc</h1>
       </div>
       <div className='text-[20px] m-8 flex items-center justify-center gap-4 text-2xl '>
       <FaLinkedin href='https://www.instagram.com/0thman8_/' className='pointer'/>
       <FaGithub />
       <FaInstagram/>

       </div>
        </nav>
    )
}

export default navbar