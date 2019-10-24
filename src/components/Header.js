import React from 'react';

const Header = () => {
    return(
        <div className="header-container">
            <div className="profileText">
                <h1 className="description" >I'm Orestis Kaplanis, I am a <a className="title-anchor" href="https://github.com/userman95">full-stack developer</a> and a Computer scientist currently working as a freelancer</h1>
            </div>
            <div className="jobs">
                <div className="current-job">
                    <h3 className="job-application">CURRENTLY</h3>
                    <a className="freelancer" href="https://www.freelancer.com/u/OrestisGr?w=f"></a>
                </div>
                <div className="previous-jobs">
                    <h3 className="job-application">PREVIOUS</h3>
                    <a className="ionian" href="https://www.microverse.org/"></a>
                </div>                
            </div>
        </div>
    );
}

export default Header