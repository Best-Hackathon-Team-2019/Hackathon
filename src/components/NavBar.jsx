import React, { Component } from "react";
import noun from "../images/noun_Peace_1039545.png";
import userPic from "../images/userProfile.svg";
import star from "../images/yellowStar.svg";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <li className="NavList">
          <ul>
            <img src={noun} />
          </ul>
          <ul>CraigList</ul>

          <ul>
            <input className="searchBar"></input>
          </ul>
          <ul>
            <img src={userPic} className="user" />
          </ul>
          <ul>Favorites</ul>
          <ul>
            <img src={star} />
          </ul>
          <ul>Profile</ul>
        </li>
      </nav>
    );
  }
}

export default NavBar;
