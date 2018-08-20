import {combineReducers} from "redux";

import players from "./reducers/players";
import filters from "./reducers/filters";

const rootReducer = combineReducers({
  players,
  filters,
});

export default rootReducer;
