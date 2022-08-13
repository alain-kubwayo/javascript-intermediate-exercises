import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';


const linkVariants = {
    hidden: {
        opacity: 0,
        y: -40
    },
    visible: {
        opacity: 1,
        y: -0
    },
    hover: {
      scale: 1.2,
      originX: 0,
      transition: {
        duration: 0.3,
      }
    }
}

export default function NavLinks(props) {
  return (
    <div className="md:flex md:items-center md:justify-center md:space-x-16 md:text-md navlinks">
        <motion.div onClick={()=>props.isMobile && props.closeMobileMenu()} className="navlink" variants={linkVariants} whileHover="hover" initial="hidden" animate="visible" transition={{ delay: 0.05 }}>
            <NavLink to="/" className="px-2 py-1 space-x-1 text-center hover:underline">About</NavLink>
        </motion.div>
        <motion.div onClick={()=>props.isMobile && props.closeMobileMenu()} className="navlink" variants={linkVariants} whileHover="hover" initial="hidden" animate="visible" transition={{ delay: 0.15 }}>
            <NavLink to="/education" className="px-2 py-1 space-x-1 text-center hover:underline">Education</NavLink>
        </motion.div>
        <motion.div onClick={()=>props.isMobile && props.closeMobileMenu()} className="navlink" variants={linkVariants} whileHover="hover" initial="hidden" animate="visible" transition={{ delay: 0.25 }}>
            <NavLink to="/trainings" className="px-2 py-1 space-x-1 text-center hover:underline">Trainings</NavLink>
        </motion.div>
        <motion.div onClick={()=>props.isMobile && props.closeMobileMenu()} className="navlink" variants={linkVariants} whileHover="hover" initial="hidden" animate="visible" transition={{ delay: 0.35 }}>
            <NavLink to="/skills" className="px-2 py-1 space-x-1 text-center hover:underline">Skills</NavLink>
        </motion.div>
        <motion.div onClick={()=>props.isMobile && props.closeMobileMenu()} className="navlink" variants={linkVariants} whileHover="hover" initial="hidden" animate="visible" transition={{ delay: 0.45 }}>
            <NavLink to="/projects" className="px-2 py-1 space-x-1 text-center hover:underline">Projects</NavLink>
        </motion.div>
    </div>
  )
}
