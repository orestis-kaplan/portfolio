import React from 'react';
import '../styles/project.css'

class Project extends React.Component {
    render(){   
        const project = this.props.project
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3"></div>
                    <div className="col-lg-6 col-md-6 project-wrapper">
                        <h1 style={{fontSize: "3.5rem"}}>{project.header}</h1>
                        <h3 className="project-title">{project.title}</h3>                    
                    </div>
                    <div className="col-lg-3 col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 screen-back">
                        <div className="col-lg-12 col-md-12 screen-one" style={{backgroundImage: 'url('+require(`../images/${project.screenOne}`)+')'}}>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3"></div>
                    <div className="col-lg-6 col-md-6 project-wrapper">
                        <h3>{project.firstDescription}</h3>
                    </div>
                    <div className="col-lg-3 col-md-3"></div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12 screen-back">
                        <div className="col-lg-12 col-md-12 screen-two" style={{backgroundImage: 'url('+require(`../images/${project.screenTwo}`)+')'}}>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-3"></div>
                    <div className="col-lg-6 col-md-6 ul-wrapper">
                        <h3>{project.secondDescription.ulTitle}</h3>
                        <ul>
                            {project.secondDescription.liOptions.map((options,key) => (
                            <li key={key}>{options}</li>
                            ))}
                        </ul>
                        <div className="repository">
                            <a rel="noopener noreferrer" href={project.onlinePreview} className="repo-links" target="_blank">Visit Site</a>
                            <a rel="noopener noreferrer" href={project.githubRepository} className="repo-links" target="_blank">Visit GitHub Repository</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3"></div>
                </div>
            </div>
        );
    }
}

export default Project;