import React, { Component } from "react";
import { connect } from "react-redux";

import {
  nameFilterChanged,
  positionFilterChanged,
  ageFilterChanged
} from "../store/actions/filters";

class Filters extends Component {
  render() {
    const {
      name,
      position,
      age,
      nameFilterChanged,
      positionFilterChanged,
      ageFilterChanged
    } = this.props;

    return (
      <div id="filters">
        <input
          value={name}
          onChange={e => nameFilterChanged(e.target.value)}
          type="text"
        />
        <select
          value={position}
          onChange={e => positionFilterChanged(e.target.value)}
        >
          <option value="" disabled>
            Select a position
          </option>
          <option value="Attacking Midfield">Attacking Midfield</option>
          <option value="Central Midfield">Central Midfield</option>
          <option value="Centre-Back">Centre-Back</option>
          <option value="Centre-Forward">Centre-Forward</option>
          <option value="Defensive Midfield">Defensive Midfield</option>
          <option value="Keeper">Keeper</option>
          <option value="Left Midfield">Left Midfield</option>
          <option value="Left Wing">Left Wing</option>
          <option value="Left-Back">Left-Back</option>
          <option value="Right-Back">Right-Back</option>
        </select>
        <input
          value={age}
          onChange={e => ageFilterChanged(e.target.value)}
          type="number"
          min="18"
          max="40"
        />
      </div>
    );
  }
}

const mapState = ({ filters }) => ({
  name: filters.name,
  position: filters.position,
  age: filters.age
});

const mapDispatch = {
  nameFilterChanged,
  positionFilterChanged,
  ageFilterChanged
};

export default connect(
  mapState,
  mapDispatch
)(Filters);
