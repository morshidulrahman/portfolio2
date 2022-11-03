
import { motion } from 'framer-motion';
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/Motionwrap';

import './About.scss';


const ABOUT = [
  { title: "web development", description: "i am backend developer with a passion for building beatiful and functional web application", url: "/assets/about01.png" },
  { title: "web development", description: "i am backend developer with a passion for building beatiful and functional web application", url: "/assets/about02.png" },
  { title: "web development", description: "i am backend developer with a passion for building beatiful and functional web application", url: "/assets/about03.png" },
  { title: "web development", description: "i am backend developer with a passion for building beatiful and functional web application", url: "/assets/about04.png" },

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
