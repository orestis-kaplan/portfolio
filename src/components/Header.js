import React from 'react';

const Header = () => {
    return(
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="profileText">
                            <h1 className="description" >I'm Orestis Kaplanis, I am a <a className="title-anchor" href="https://github.com/userman95">full-stack developer </a> 
                            and a Computer scientist currently working as a freelancer.
                            My passion is helping people make their ideas reality in the best way possible using web technologies. <br/><br/>React, Redux, Ruby, Rails.</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="header-social">
                            <a href="https://github.com/userman95" className="github-social"></a>
                            <a href="https://www.linkedin.com/in/orestis-kaplanis-051743176/" className="linkedin-social"></a>
                            <a href="https://twitter.com/orestiskaplanis" className="twitter-social"></a>
                            <a href="mailto: orestismail71@gmail.com" className="gmail-social"></a>                        
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="jobs">
                            <div className="current-job">
                                <h3 className="job-application">CURRENTLY:</h3>
                                <a className="freelancer" href="https://www.freelancer.com/u/OrestisGr?w=f"></a>
                            </div>
                            <div className="previous-jobs">
                                <h3 className="job-application">PREVIOUS:</h3>
                                <div className="prev-icons">
                                    <a className="ionian" href="http://di.ionio.gr/en/"></a>
                                    <a className="microverse" href="https://www.microverse.org/"></a>
                                </div>
                            </div>                                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-2"></div>
        </div>
    );
}

export default Header