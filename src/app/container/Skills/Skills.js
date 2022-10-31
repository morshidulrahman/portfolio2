import React from 'react'
import skilss from "../../assets/figma.png"
import { motion } from 'framer-motion';
import AppWrap from '../wrapper/AppWrap'

import "./Skills.scss"
const SkillsData = [
    { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }
]

const Skills = () => {
    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>
            <div className='app__skills-container'>
                <motion.div className="app__skills-list">
                    {SkillsData.map((item, index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={index}>
                            <div className="app__flex">
                                <img src={item.image} alt={item.description} />
                            </div>
                            <p className="p-text">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(Skills, "skills")