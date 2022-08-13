import { motion } from 'framer-motion';
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai';
// React-Icons import
import { 
  SiMysql, 
  SiPhp, 
  SiJavascript,
  SiHtml5, 
  SiCss3, 
  SiBootstrap,
} from 'react-icons/si';

import epms  from '../assets/epms.png';
import taskCatalyst from '../assets/task-catalyst-screenshot.png';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x:0,
    transition: {
      delay: 0.3,
      duration: 0.7,
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const projectVariants = {
  hidden: {
    x: '100vw',
  },
  visible: {
    x: "0",
    transition: {
      delay: 0.3,
      duration: 0.6,
      type: 'spring',
      stiffness: 40
    }
  }
}

export default function Projects() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="w-full px-4 py-4 mx-auto font-thin leading-10 md:py-16 md:px-0 md:w-4/5 lg:w-1/2">
      <motion.div variants={projectVariants} initial="hidden" animate="visible">
        <div className="overflow-scroll text-center bg-white rounded-lg md:text-left card">
          <div>
            <img src={epms} alt="Dashboard screenshot - EPMS" className="w-full rounded-t-lg" />
          </div>
          <div className="px-4 py-4">
            <h2 className="font-semibold">EPMS</h2>
            <p>
              A data powered website to help poultry farm owners manage the day-to-day running of the farm from one central place.
              It allows the users to keep track of sales (eggs laid and sold), employee payroll, birds' purchased and mortality rate, stock summary, income/expenditure, and record cost of feed consumed & purchased.
            </p>
          </div>
         
          <div className="px-4">
            <div className="flex items-center justify-between py-8">
              <div>
                <h3 className="mb-2">Tech Stack:</h3>
                <div className="flex items-center justify-start space-x-2">
                  <div><SiHtml5 style={{ color: 'orange', fontSize: '30px' }}/></div>
                  <div><SiCss3 style={{ color: 'blue', fontSize: '30px' }}/></div>
                  <div><SiBootstrap style={{ color: 'violet', fontSize: '30px' }}/></div>
                  <div><SiJavascript style={{ background: '#333', color: 'yellow', fontSize: '30px' }}/></div>
                  <div><SiPhp style={{ color: '#778beb', fontSize: '30px' }}/></div>
                  <div><SiMysql style={{ color: '#778beb', fontSize: '30px' }}/></div>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <a href="https://github.com/alain-kubwayo/epms" target="_blank"><AiFillGithub style={{ color: '#333', fontSize: '40px' }} /></a>
                <a href="https://www.youtube.com/watch?v=ZljZxN1Op9I" target="_blank"><AiFillYoutube style={{ color: 'red', fontSize: '40px' }} /></a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
