import React from 'react'
import skilss from "../../assets/figma.png"
import { motion } from 'framer-motion';
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/Motionwrap';
import "./Skills.scss"
import ReactTooltip from 'react-tooltip';
const SkillsData = [
    { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }, { image: skilss, description: "Flutter", }
]
const Experiant = [
    {
        year: 2014,
        title: "i am frontend developer",
        company: "ks devware"
    },
    {
        year: 2014,
        title: "i am frontend developer",
        company: "ks devware"
    },
    {
        year: 2014,
        title: "i am frontend developer",
        company: "ks devware"
    },
    {
        year: 2014,
        title: "i am frontend developer",
        company: "ks devware"
    }
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

                <div className="app__skills-exp">
                    {Experiant.map((experience, index) => (
                        <div
                            className="app__skills-exp-item"
                            key={index}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <div className="app__skills-exp-works">
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="app__skills-exp-work"
                                    data-tip
                                    data-for={experience.title}

                                >
                                    <h4 className="bold-text">{experience.title}</h4>
                                    <p className="p-text">{experience.company}</p>
                                </motion.div>
                                <ReactTooltip
                                    id={experience.title}
                                    effect="solid"
                                    arrowColor="#fff"
                                    className="skills-tooltip"
                                >
                                    {experience.title}
                                </ReactTooltip>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg")