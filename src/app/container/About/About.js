import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MotionWrap from '../wrapper/Motionwrap';
import images1 from "../../assets/about01.png"
import images2 from "../../assets/about02.png"
import images3 from "../../assets/about03.png"
import images4 from "../../assets/about04.png"
import './About.scss';
import AppWrap from '../wrapper/AppWrap';

const ABOUT = [
  { title: "web development", description: "i am backend developer with a passion for building beatiful and functional web application", url: images1 },
  { title: "web development", description: "i am backend developer with a passion for building beatiful and functional web application", url: images2 },
  { title: "web development", description: "i am backend developer with a passion for building beatiful and functional web application", url: images3 },
  { title: "web development", description: "i am backend developer with a passion for building beatiful and functional web application", url: images4 },

]
const About = () => {


  return (
    <>
      <h2 className="head-text about-text">I Know that <span>Good Design</span> <br />means  <span>Good Business</span></h2>

      <div className="app__profiles">
        {ABOUT.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={index}
          >
            <img src={about.url} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about", "app__whitebg")
