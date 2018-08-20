import {createSelector} from "reselect";

import {getAge} from "../../utils/date";

export const filteredPlayers = createSelector(
  state => state.filters,
  state => state.players.list,
  ({name, position, age}, players) =>
    players
      .filter(player => (position ? player.position === position : true))
      .filter(
        player =>
          name ? player.name.toLowerCase().includes(name.toLowerCase()) : true
      )
      .filter(
        player =>
          age ? String(getAge(player.dateOfBirth)).includes(String(age)) : true
      )
);
