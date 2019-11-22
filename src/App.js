import React, { Component } from "react";

import "./App.css";
import craiglist from "./craiglist.json";
import axios from "axios";

export default class App extends Component {
  state = {
    listings: craiglist
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${this.props.match.params.id}/analyzedInstructions?apiKey=${process.env.REACT_APP_SPOON}`
      );
      this.setState({ listings: data });
      console.log(data);
    } catch (e) {
      console.log("Error fetching lists", e);
    }
  };

  render() {
    return <div>hello</div>;
  }
}
