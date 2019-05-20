import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from './../error-indicator/error-indicator';

import './app.css';
import PeoplePage from "../people-page/people-page";

export default class App extends React.Component{

    state =
        {
            showRandomPlanet: true,
            selected: null,
            hasError: false
        };

    toggleRandomPlanet = () => {

    };



    componentDidCatch(){
        console.log('componentDidCatch');
        this.setState({hasError:true});
    };

    render(){

        const planet = this.state.showRandomPlanet ? <RandomPlanet />: null;

        if (this.state.hasError) {return <ErrorIndicator />}

        return (
            <div>
                <Header />
                {planet}

                <button
                className="btn btn-info my-2"
                onClick={this.toggleRandomPlanet}
                >
                    Change Planet
                </button>

                <PeoplePage/>
            </div>
        );
    }
}
