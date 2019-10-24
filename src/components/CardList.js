import React from 'react';
import Card from './Card'
import projects from '../constants/projects'

class CardList extends React.Component {
    render(){
        return (     
            <div className="my-work">
                <h2 className="WorkTitle" id="work">My Work</h2>
                <div className="container">
                    {projects.projects.map(project=>(
                        <Card title={project.title}
                        image={project.image}
                        description={project.description}
                        link={project.link}
                        key={project.id}/>
                    ))}           
                </div>
            </div>
        );
    }
}

export default CardList