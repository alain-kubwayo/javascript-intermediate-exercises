import { motion } from "framer-motion"

const pathVariants = {
  hidden: {
    pathLength: 0
  },
  visible: {
    pathLength: 1,
    transition: {
      yoyo: Infinity,
      duration: 1.5,
      ease: "easeInOut"
    }
  }
}

const titleVariants = {
  hidden: {
    opacity: 0,
    y: "-100vw"
  },
  visible: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 1,
      ease: "easeInOut"
    }
  }
}
export default function Header() {
  return (
    <div className="px-4 text-center md:pl-8">
      <motion.h1 variants={titleVariants} initial="hidden" animate="visible" className="text-xl md:text-4xl fond-semibold md:font-bold">Alain <span>Kubwayo</span></motion.h1>
      <motion.svg className="hidden w-20 h-20 md:inline-flex" xmlns="http://www.w3.org/2000/svg" viewBox="-1.4 0.6 6.8 4.8">
        <motion.path variants={pathVariants} initial="hidden" animate="visible" d="M 1 5 L 3 1 M -1 3 L 1 2 L 1 2 L -1 3 L 1 4 M 3 4 L 5 3 L 3 2" stroke="#ffffff" strokeWidth="0.4" fill="none"/>
      </motion.svg>
    </div>
  )
}