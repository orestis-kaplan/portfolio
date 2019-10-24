import React from 'react';
import '../styles/footer.css'

const Footer = () => {
    return(
        <div className="footer" id="contact">
           <h2>Want to start a project? <a className="title-anchor" href="mailto: orestismail71@gmail.com">Reach me</a></h2>
            <ul className="findme">
                <li><a className="link-anchors" href="https://github.com/userman95">Github</a></li>
                <li><a className="link-anchors" href="https://www.linkedin.com/in/orestis-kaplanis-051743176/">LinkedIn</a></li>
                <li><a className="link-anchors" href="https://twitter.com/orestiskaplanis">Tweeter</a></li>
                <li><a className="link-anchors" href="mailto: orestismail71@gmail.com">Email</a></li>
            </ul>
        </div>
    );
}

export default Footer