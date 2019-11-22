import "./App.css";
import craiglist from "./craiglist.json";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  state = {
    objects: craiglist,
    prices: null
  };

  getObjects = () => {
    const listArray = this.state.objects.map((listing, i) => {
                  console.log(listing)

      return (
        // <div className="list-group-item list-group-item-action">
        //   <div className="listBoxes">
        //     {console.log(listing)}
        //     <img src={listing.Images} alt="Image not found" />
        //     <h3>{listing.Title}</h3>
        //   </div>
        // </div>
        <div class="card">
  <img src={listing.Images[0]} width="50px" height="50px" alt="Avatar" />
  <div class="container">
    <h4><b>{listing.Title}</b></h4> 
    
  </div>
</div>
      );
    });
    return listArray;
  };


  

  render() {
    return (
      <div>

<div className="container">
          {/* <div className="row">
            <span className="col-3" >
            Search Bar
            </span>

            <span className="col-5" >
              <ui className="list-group">
                {this.getObjects()}
              </ui>
            </span>

            <span className="col-4">
              Map
            </span>



          </div> */}

          <div className = "row">
            <span className="col-3" >search bar</span>
            <span className="col-5" >
              helloo
            
            <ui className="list-group">
                {this.getObjects()}
              </ui>
            
            </span>
            <span className="col-4" >map</span>
          </div>
        </div>
       
      </div>
    );
  }
}
