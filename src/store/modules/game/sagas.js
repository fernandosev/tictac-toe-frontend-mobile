import { Alert } from "react-native";
import { takeLatest, call, put, all, select } from "redux-saga/effects";
import api from "./../../../services/api";
import {
  getBoardFailure,
  getBoardRequest,
  getBoardSuccess,
  getStatusFailure,
  getStatusRequest,
  getStatusSuccess,
  moveFailure,
  moveSuccess,
  restartFailure,
  restartSuccess,
} from "./actions";

export function* getStatus() {
  try {
    const response = yield call(api.get, "/tictactoe/status/all");

    const { next, winner, count, status } = response.data;
    yield put(getBoardRequest());
    yield put(getStatusSuccess(next, winner, count, status));
  } catch (err) {
    yield put(getStatusFailure());
    console.log(err);
  }
}

export function* getBoard() {
  try {
    const response = yield call(api.get, "/tictactoe/board");

    yield put(getBoardSuccess(response.data));
  } catch (err) {
    yield put(getBoardFailure());
    console.log(err);
  }
}

export function* move({ payload }) {
  const { id } = payload;
  try {
    const response = yield call(api.get, `/tictactoe/move/${id}`);

    yield put(getStatusRequest());
    yield put(getBoardRequest());

    yield put(moveSuccess());
  } catch (err) {
    yield put(moveFailure());
  }
}

export function* restart({ payload }) {
  try {
    const response = yield call(api.get, `/tictactoe/init`);

    yield put(getStatusRequest());
    yield put(getBoardRequest());

    yield put(restartSuccess());
  } catch (err) {
    yield put(restartFailure());
  }
}

export default all([
  takeLatest("@game/GET_STATUS_REQUEST", getStatus),
  takeLatest("@game/GET_BOARD_REQUEST", getBoard),
  takeLatest("@game/MOVE_REQUEST", move),
  takeLatest("@game/RESTART_REQUEST", restart),
]);
