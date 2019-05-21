import React, { Component } from 'react';
import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";

const Row = ({left, right}) =>{
    return(<div className="row mb-2">
        <div className="col-md-6">
            {left}
        </div>
        <div className="col-md-6">
            {right}
        </div>
    </div>);
};

export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state={
        selected: null,
        hasError:false
    };

    onPersonSelected = (id) => {
        this.setState({
            selected:id
        });
    };

    componentDidCatch(err, info){
        console.log('componentDidCatch_from_peoplePage');
        console.log(err);
        console.log(info);
        this.setState({hasError:true});
    };

    render(){

        if (this.state.hasError) {return <ErrorIndicator />}

        const itemList = <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
        >
            {(item)=> (item.name)}
        </ItemList>;

        const personDetails = <PersonDetails personId={this.state.selected}/>;

        return (
            <Row left={itemList} right ={personDetails}/>
        );
    }
}