import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { FaUserGraduate } from 'react-icons/fa';
import Wrapper from '../wrappers/Wrapper';

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


const skills = [
  'HTML', 'CSS', 'Tailwind', 'JavaScript', 'APIs', 'ReactJS', 'PHP', 'Laravel'
];

const gymSkills = [
  'CSS', 'TailwindCSS', 'JavaScript', 'ReactJS', 'NextJS', 'NodeJS', 'Blockchain'
]

export default function Trainings() {
  return (
    <Wrapper>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="py-4 overflow-hidden font-thin leading-10 md:py-16">
        <div className="mb-4 text-center border-b-2 md:mb-10 md:text-left border-sky-900">
          <h2 className="pb-4">September 2022 - Present</h2>
          <div>
            <div className="flex items-center justify-center py-4 space-x-4 md:justify-start">
              <div>
                <FaUserGraduate />
              </div>
              <div>
                <h3>The Gym - Software Development Trainee Program</h3>
              </div>
            </div>
            <p className="py-4">Rwanda's most intense software development trainee program cohort of 30 trainee developers for the German digital agency <a href="https://www.apeunit.com" target="_blank" className="font-bold cursor-pointer hover:underline text-[#FF6A3D]">Ape Unit</a>.</p>
            <div>
              <h4 className="py-4">Tech Stack:</h4>
              <ul className="grid w-1/2 gap-2 mx-auto xs:grid-cols-1 sm:grid-cols-2 md:gap-4 md:w-full md:grid-cols-4 skill">
                {gymSkills.map(skill => {
                  return (
                    <li key={skill} className="flex items-center justify-center space-x-1 sm:justify-start">
                      <div className="w-4 h-4 bg-white border-1" />
                      <p>{ skill }</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="pb-4">Jan - April 2021</h2>
          <div>
            <div className="flex items-center justify-center py-4 space-x-4 md:justify-start">
              <div>
                <FaUserGraduate />
              </div>
              <div>
                <h3>Rwanda Digital Skill Acceleration Program</h3>
              </div>
            </div>
            <p className="py-4">As part of the Rwanda and German digital alliance, this three-month virtual master class powered by Zatec in cooperation with GIZ and DSAA specialed in web-based software development.</p>
            <div>
              <h4 className="py-4">Tech Stack:</h4>
              <ul className="grid w-1/2 gap-2 mx-auto xs:grid-cols-1 sm:grid-cols-2 md:gap-4 md:w-full md:grid-cols-4 skill">
                {skills.map(skill => {
                  return (
                    <li key={skill} className="flex items-center justify-center space-x-1 sm:justify-start">
                      <div className="w-4 h-4 bg-white border-1" />
                      <p>{ skill }</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </Wrapper>
  )
}
