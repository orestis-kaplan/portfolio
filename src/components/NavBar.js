import React from 'react';
import '../styles/navbar.css'

const NavBar = () => {
    return(
        <div className="navbar">
            <div className="picwrapper">
                <div className="profilePic" ></div>
            </div>
            <div className="links">
                <a className="link-anchors" href="#work">My Work</a>
                <a className="link-anchors" href="#contact" style={{margin: '31px'}}>Contact</a>
            </div>
        </div>
    );
}

export default NavBar