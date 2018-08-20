const initialState = {
  list: [],
};

const players = (state = initialState, {type, payload}) => {
  switch (type) {
    case "players/PLAYERS_FETCHED":
      return {
        ...state,
        list: payload,
      };
    default:
      return state;
  }
};

export default players;
