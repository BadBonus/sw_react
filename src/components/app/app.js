import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from './../error-indicator/error-indicator';

import './app.css';
import PeoplePage from "../people-page/people-page";
import SwapiService from "../../services/swapi-service";

export default class App extends React.Component{

    swapiService = new SwapiService();

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
// <div className="row mb-2">
//     <div className="col-md-6">
//         <ItemList
//             onItemSelected={this.onPersonSelected}
//             getData={this.swapiService.getAllPlanets}
//             renderItem={(item)=> item.name}
//         />
//     </div>
//     <div className="col-md-6">
//         <PersonDetails personId={this.state.selected}/>
//     </div>
// </div>
//
// <div className="row mb-2">
//     <div className="col-md-6">
//     <ItemList
// onItemSelected={this.onPersonSelected}
// getData={this.swapiService.getAllStarships}
// renderItem={(item)=> item.name}
// />
// </div>
// <div className="col-md-6">
//     <PersonDetails personId={this.state.selected}/>
//     </div>
// </div>