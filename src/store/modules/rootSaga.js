import { all } from "redux-saga/effects";

import tictactoe from "./tictactoe/sagas";
import game from "./game/sagas";

export default function* rootReducer() {
  return yield all([tictactoe, game]);
}
