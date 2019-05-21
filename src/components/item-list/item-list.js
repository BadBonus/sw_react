import React, { Component } from 'react';


import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/spinner";

export default class ItemList extends Component {

    state={
      itemList: null
    };


    componentDidMount()
    {
        const {getData} = this.props;

        getData()
        .then((peopleList)=>{
            this.setState({
                peopleList
            });
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.children(item);

            return <li
                className="list-group-item"
                key = {id}
                onClick={()=> this.props.onItemSelected(id)}
            >
                {label}
            </li>
        });
    }


  render() {

      const {peopleList} = this.state;

      if (!peopleList)
      {
          return <Spinner />;
      }

      const itemList = this.renderItems(this.state.peopleList);

    return (
      <ul className="item-list list-group">
          {
              itemList
          }
      </ul>
    );
  }
}
