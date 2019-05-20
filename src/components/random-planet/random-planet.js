import React, { Component } from 'react';
import SwapiService from './../../services/swapi-service';
import Spinner from './../spinner/spinner';
import ErrorIndicator from './../error-indicator/error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state={
    planet: {},
      loading: true,
      error: false
  };

  componentDidMount(){
      this.updatePlanet();
      this.interval = setInterval(this.updatePlanet, 1500);
  }

  componentWillUnmount(){
      clearInterval(this.interval);
  }

    onPlanetLoaded = (planet) =>{
        this.setState({planet, loading: false});
    };

    onError = (err) =>{
        this.setState({error:true, loading:false});
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random()*20)+2;
      this.swapiService
          .getPlanet(id)
          .then(this.onPlanetLoaded)
          .catch(this.onError);

    };

  render() {

    let {planet, loading, error} = this.state;
    const spinner = loading ? <Spinner/> : null;
    const content = !loading && !error ? <PlanetView planet={planet}/> : null;
    const error_content = error ? <ErrorIndicator />:null;

    if (loading) {
      return <Spinner />
    }
    return (
        <div className="random-planet jumbotron rounded">
            {spinner}
            {content}
            {error_content}
        </div>

    );

  }

}
const PlanetView = ({planet}) =>{
    let {rotationPeriod,population, diameter,name, id} = planet;
    return ( <React.Fragment>
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='img of planet'/>
        <div>
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    <span className="term">Population</span>
                    <span>{population}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Rotation Period</span>
                    <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                    <span className="term">Diameter</span>
                    <span>{diameter}</span>
                </li>
            </ul>
        </div>
    </React.Fragment>);
};