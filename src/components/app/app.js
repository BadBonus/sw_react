import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from './../error-indicator/error-indicator';

import './app.css';

export default class App extends React.Component{

    state =
        {
            showRandomPlanet: true,
            selected: null,
            hasError: false
        };

    toggleRandomPlanet = () => {

    };

    onPersonSelected = (id) => {
        this.setState({
           selected:id
        });
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

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selected}/>
                    </div>
                </div>

            </div>
        );
    }
}
