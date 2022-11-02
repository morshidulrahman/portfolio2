import React from 'react'
import AppWrap from '../wrapper/AppWrap'
import MotionWrap from '../wrapper/Motionwrap';

const Footer = () => {
    return (
        <>
            <h2 className='head-text'>Take a coffee & chat with me</h2>
        </>
    )
}

export default AppWrap(MotionWrap(Footer, "app__footer"), "footer", "app__whitebg")