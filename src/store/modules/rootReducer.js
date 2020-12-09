import { combineReducers } from "redux";

import tictactoe from "./tictactoe/reducer";
import game from "./game/reducer";

export default combineReducers({
  tictactoe,
  game,
});
