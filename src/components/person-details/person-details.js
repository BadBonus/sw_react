import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from './../spinner/spinner';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false
  };

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProps){
    if (this.props.personId !== prevProps.personId)
    {
      this.updatePerson();
    }
  }

  updatePerson(){
    const {personId} = this.props;
    if (!personId)
    {
      return;
    }
    this.setState({loading:true});
    this.swapiService
        .getPerson(personId)
        .then((person)=>{
          this.setState({person});
        }
        )
        .then(()=>{
            this.setState({loading:false});
        })
        .catch((err)=>{
          console.log(`Из person-details`);
          console.log(err);
        });
  }

  render() {

    if(!this.state.person){
      return <span> Select a person</span>
    }
      const {person: {id, name, gender, birthYear, eyeColor
      }, loading }=this.state;

    if (loading)  return <Spinner/> ;

    return (
      <div className="person-details card">
        <img className="person-image" alt = ''
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
