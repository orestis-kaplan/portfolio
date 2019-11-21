import React from 'react';
import CardList from './CardList'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'
import Project from './Project';


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            renderComponent: true,
            project: null
        }
        this.triggerRender = this.triggerRender.bind(this);
    }
    triggerRender = (projectRender) => {
        window.scrollTo(0,0);
        this.setState({
            renderComponent: !this.state.renderComponent,
            project: projectRender
        })
    }
    render(){
        return(
            <div className="app">
                <div className="container">
                <NavBar triggerRender={this.triggerRender} renderComponent={this.state.renderComponent}/>
                {this.state.renderComponent ? <Header /> : <div></div>}
                </div>
                {this.state.renderComponent ? 
                (<CardList triggerRender={this.triggerRender} renderComponent={this.state.renderComponent}/> ):
                <Project project={this.state.project}/>
                }
                <Footer />
            </div>
        );
    }
}
