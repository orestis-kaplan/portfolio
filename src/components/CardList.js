import React from 'react';
import Card from './Card'
import cards from '../constants/projects'

class CardList extends React.Component {
    render(){     
        return (   
            <div className="my-work">    
                <div className="container">             
                    <h2 id="work">My Work</h2>
                </div>                
                <div className="row">
                    {cards.cards.map((card,index) =>(
                        <Card title={card.title}
                        image={card.image}
                        description={card.description}
                        project={cards.projects[index]}
                        triggerRender={this.props.triggerRender}
                        key={card.id}/>
                    ))}           
                </div> 
            </div>
        );
    }
}

export default CardList