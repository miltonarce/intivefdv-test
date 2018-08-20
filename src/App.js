import React, { Component } from "react";
import { connect } from "react-redux";

import Filters from "./components/Filters";
import Table from "./components/Table";

import players from "./services/players";

import { playersFetched } from "./store/actions/players";
import { filteredPlayers } from "./store/selectors/players";

import "./App.css";

class App extends Component {
  async componentDidMount() {
    const { playersFetched } = this.props;
    const { data } = await players.fetch();

    playersFetched(data);
  }

  render() {
    const { players } = this.props;

    return (
      <div className="App">
        <h1>Football player finder</h1>
        <Filters />
        <Table players={players} />
      </div>
    );
  }
}

const mapState = state => ({
  players: filteredPlayers(state)
});

const mapDispatch = {
  playersFetched
};

export default connect(
  mapState,
  mapDispatch
)(App);
