import { all } from "redux-saga/effects";

import game from "./game/sagas";

export default function* rootReducer() {
  return yield all([game]);
}
