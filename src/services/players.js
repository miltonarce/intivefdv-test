import request from "../utils/request";

const URL =
  "https://football-players-b31f2.firebaseio.com/players.json?print=pretty";

const players = {
  fetch: function() {
    return request(URL);
  },
};

export default players;
