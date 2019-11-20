import React from 'react';
import '../styles/navbar.css'

const NavBar = ({renderComponent,triggerRender}) => {
    return(
        <div className="navbarWrapper">
            <div className="picwrapper" id="pic">
                <div className="profilePic" ></div>
            </div>
            <div className="links">
                {renderComponent ? 
                    <a className="link-anchorsOne" href="#work" >My Work</a> :
                    <a className="link-anchorsOne" href="#work" onClick={()=> triggerRender(null)}>My Work</a>
                }
                {renderComponent ? 
                    <a className="link-anchors" href="#contact">Contact</a> :
                    <a className="link-anchors" href="#contact" onClick={()=> triggerRender(null)}>Contact</a>
                }
                {!renderComponent ? 
                    <div className="back" onClick={()=> triggerRender(null)}>
                        <a href="#work" className="btn btn-info btn-lg">
                            <span className="glyphicon glyphicon-arrow-left"></span> Back
                        </a>
                    </div> : 
                    <div className="back" style={{display: "none"}}  >
                        <a href="#pic" className="btn btn-info btn-lg">
                            <span className="glyphicon glyphicon-arrow-left"></span> Back
                        </a>
                    </div>
                }

            </div>

        </div>
    );
}

export default NavBar