import React, { Component } from 'react';
import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import ErrorIndicator from "../error-indicator/error-indicator";

export default class PeoplePage extends Component{

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

        return (
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
        );
    }
}