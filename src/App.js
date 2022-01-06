import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import CardList from "./components/CardList";
import { robots } from "./components/robots";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  handleSearch = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLocaleLowerCase()
        .includes(this.state.searchfield.toLocaleLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          searchChange={this.handleSearch}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
