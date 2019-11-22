import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <li className="NavList">
          <div className="firstImages">
            <ul>
              <span>
                <p> CraigList</p>
              </span>
            </ul>
          </div>
          <ul>
            <input className="searchBar"></input>
          </ul>
          <ul> Favorites</ul>
          <ul>Profile</ul>
        </li>
      </nav>
    );
  }
}

export default NavBar;
