import React, {useState} from 'react'
import { motion } from 'framer-motion';
import {FaUserGraduate, FaUniversity} from 'react-icons/fa';
import {IoMdArrowDroprightCircle, IoMdArrowDropdownCircle} from 'react-icons/io';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.5,
      type: 'spring',
      stiffness: 40
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const relevantCourses = ["Web Technologies", "Data Structures & Algorithms", "Parallel and Distributed Computing", "Digital Systems", "Computer Organization & Architecture"];

export default function Education() {
  const [showCourses, setShowCourses] = useState(false);
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="w-full px-4 py-4 mx-auto font-thin leading-10 md:py-16 md:px-0 md:w-4/5 lg:w-1/2">
      <div className="text-center md:text-left">
        <h3>2016 - 2020</h3>
        <div>
          <div className="flex items-center justify-center py-4 space-x-4 md:justify-start">
            <div>
              <FaUserGraduate />
            </div>
            <div>
              <p>B.Sc. Computer Engineering</p>
            </div>
          </div>
          <div className="flex items-center justify-center pb-4 space-x-4 md:justify-start">
            <div>
              <FaUniversity />
            </div>
            <div>
              <p>Ashesi University</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 md:justify-start">
            <div>
              {showCourses ? <IoMdArrowDropdownCircle /> : <IoMdArrowDroprightCircle />}
            </div>
            <div onClick={()=>setShowCourses(!showCourses)} className="hover:underline hover:cursor-pointer">
              <p>Relevant Courses</p> 
            </div>
          </div>
          {showCourses && (
            <ul className="py-4 mx-10">
              {relevantCourses.map(course => (
                <li key={course} className="flex items-center justify-center py-2 space-x-2 md:justify-start">
                  <div className="w-4 h-4 bg-white border-1" />
                  <p>{course}</p>
                </li>
            ))}
            </ul>
          )}
        </div>
      </div>
    </motion.div>
  )
}
