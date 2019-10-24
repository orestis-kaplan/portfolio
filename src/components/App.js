import React from 'react';
import CardList from './CardList'
import NavBar from './NavBar'
import Header from './Header'
import Footer from './Footer'


export default class App extends React.Component {
    render(){
        return(
            <div>
                <NavBar />
                <Header />
                <CardList />
                <Footer />
            </div>
        );
    }
}
