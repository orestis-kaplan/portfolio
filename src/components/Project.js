import React from 'react';

class Project extends React.Component {
    render(){   
        const project = this.props.project
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>{project.title}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Project;