import { motion } from 'framer-motion';

// React-Icons import
import { 
    SiMysql, 
    SiPhp, 
    SiLaravel, 
    SiJavascript, 
    SiReact, 
    SiHtml5, 
    SiCss3, 
    SiTailwindcss, 
    SiVisualstudio, 
    SiGit, 
    SiFirebase, 
    SiJquery 
  } from 'react-icons/si';

const skillVariants = {
    hidden: {
        opacity: 0,
        x: "100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 30
        }
    }
}

export default function Skills() {
  return (
    <div className="w-full px-4 py-4 mx-auto font-thin leading-10 md:py-16 md:px-0 md:w-4/5 lg:w-1/2">
        <motion.div variants={skillVariants} initial="hidden" animate="visible">
        <div className="grid grid-cols-1 gap-8 text-center md:gap-20 md:text-left md:grid-cols-2">
            <div>
                <h2 className="mb-4">Tools</h2>
                <div className="flex items-center justify-center space-x-4 md:justify-start">
                    <div><SiVisualstudio style={{color: '#0abde3', fontSize: '50px'}} /></div>
                    <div><SiGit style={{color: '#ee5253', fontSize: '50px'}} /></div>
                    <div><SiFirebase style={{color: '#ff9f43', fontSize: '50px'}}/></div>
                </div>
            </div>
            <div>
                <h2 className="mb-4">Frontend</h2>
                <div className="flex items-center justify-center space-x-4 md:justify-start">
                    <div><SiHtml5 style={{ color: '#EE5A24', fontSize: '50px' }} /></div>
                    <div><SiCss3 style={{ color: 'blue', fontSize: '50px' }}/></div>
                    <div><SiTailwindcss style={{color: '#0abde3', fontSize: '50px'}} /></div>
                    <div><SiJavascript style={{ background: '#333', color: 'yellow', fontSize: '50px' }}/></div>
                    <div><SiJquery style={{color: '#0abde3', fontSize: '50px'}}  /></div>
                    <div><SiReact style={{color: '#0abde3', fontSize: '50px'}} /></div>
                </div>
            </div>   
            <div>
                <h2 className="mb-4">Backend</h2>
                <div className="flex items-center justify-center space-x-4 md:justify-start">
                    <div><SiPhp style={{ color: '#778beb', fontSize: '50px' }} /></div>
                    <div><SiLaravel style={{ color: '#EE5A24', fontSize: '50px' }} /></div> 
                </div>
                </div>
            <div>
                <h2 className="mb-4">Database</h2>
                <div className="flex items-center justify-center space-x-4 md:justify-start">
                    <div><SiMysql style={{ color: '#778beb', fontSize: '50px' }} /></div>
                </div>
            </div>

        </div>
        
      </motion.div>
    </div>
  )
}
