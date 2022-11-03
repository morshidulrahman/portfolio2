import React, { useState } from 'react'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/Motionwrap';

import './Footer.scss'
const Footer = () => {
    const [isFormSubmitted, setFormSubmitted] = useState(false)
    const [loading, setloading] = useState(false)
    const handleSubmit = () => {
        setFormSubmitted(!isFormSubmitted)
        setloading(!loading)
    }
    return (
        <>
            <h2 className='head-text'>Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src='/assets/email.png' alt="email" />
                    <a href="boydanger416@gamil.com" className="p-text">boydanger416@gamil</a>
                </div>
                <div className="app__footer-card">
                    <img src='/assets/mobile.png' alt="phone" />
                    <a href="tel:+8801772368192" className="p-text">+88 01772368192</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input className="p-text" type="text" placeholder="Your Name" name="username" />
                    </div>
                    <div className="app__flex">
                        <input className="p-text" type="email" placeholder="Your Email" name="email" />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"

                            name="message"

                        />
                    </div>
                    <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    )
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "contact", "app__whitebg")