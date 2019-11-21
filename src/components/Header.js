import React from 'react';

const Header = () => {
    return(
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="profileText">
                        <h1 className="description" >I'm Orestis Kaplanis, I am a <a className="title-anchor" href="https://github.com/userman95">full-stack developer</a> and a Computer scientist currently working as a freelancer.My passion is to help people make their ideas reality in the best way possible using React and Ruby on Rails</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="jobs">
                        <div className="current-job">
                            <h3 className="job-application">CURRENTLY:</h3>
                            <a className="freelancer" href="https://www.freelancer.com/u/OrestisGr?w=f"></a>
                        </div>
                        <div className="previous-jobs">
                            <h3 className="job-application">PREVIOUS:</h3>
                            <a className="ionian" href="http://di.ionio.gr/en/"></a>
                        </div>                                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header