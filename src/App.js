import "./App.css";
import craiglist from "./craiglist.json";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    objects: craiglist,
    prices: null
  };

  getObjects = () => {
    const listArray = this.state.objects.map((listing, i) => {
      return (
        <div>
          <div className="listBoxes">
            {console.log(listing)}
            <img src={listing.Images} alt="Image not found" />
            <h3>{listing.Title}</h3>
          </div>
        </div>
      );
    });
    return listArray;
  };

  render() {
    return (
      <div>
        hello
        {this.getObjects()}
      </div>
    );
  }
}
