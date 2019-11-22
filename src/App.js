import "./App.css";
import craiglist from "./craiglist.json";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import map from "./map.jpg"

export default class App extends Component {
  state = {
    objects: craiglist,
    prices: null
  };

  getObjects = () => {
    const listArray = this.state.objects.map((listing, i) => {
      console.log(listing);

      return (
        <div class="card">
          <img
            src={listing.Images[0]}
            width="50px"
            height="50px"
            alt="Avatar"
          />
          <div class="container">
            <h4>
              <b>{listing.Title}</b>
            </h4>
          </div>
        </div>
      );
    });
    return listArray;
  };

  render() {
    return (
      <div>
        <NavBar />

        <div className="container">
          <div className="row">
            <span className="col-3" text-align="center">
              <div>Housing</div>
              <div>

              <input type="checkbox" label="pets"/> Pets

              </div>
              <div>

              <input type="checkbox" label="pets"/> Furnished

              </div>
              <div>

              <input type="checkbox" label="pets"/> Non-Smoking

              </div>

            <form>
              <input className=""/>
              
              
            </form>
            
            
            </span>
            <span className="col-5">
              helloo
              <ui className="list-group">{this.getObjects()}</ui>
            </span>
            <span className="col-4">
              <img src={map} alt="blah" image-size="cover"></img>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
