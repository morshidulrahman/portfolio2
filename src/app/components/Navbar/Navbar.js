import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const NAVBAR = [
    "home", "about", "work", "skills", "contact"
]
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <h1>Morshidul</h1>
            </div>
            <ul className='app__navbar-links'>
                {
                    NAVBAR.map((item, index) => (
                        <li key={index} className=''>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    ))}
            </ul>


            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {NAVBAR.map((item, index) => (
                                <li key={index}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
