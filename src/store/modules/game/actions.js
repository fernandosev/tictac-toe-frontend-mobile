export function getStatusRequest() {
  return {
    type: "@game/GET_STATUS_REQUEST",
  };
}

export function getStatusSuccess(next, winner, count, status) {
  return {
    type: "@game/GET_STATUS_SUCCESS",
    payload: { next, winner, count, status },
  };
}

export function getStatusFailure() {
  return {
    type: "@game/GET_STATUS_FAILURE",
  };
}

export function getBoardRequest() {
  return {
    type: "@game/GET_BOARD_REQUEST",
  };
}

export function getBoardSuccess(board) {
  return {
    type: "@game/GET_BOARD_SUCCESS",
    payload: { board },
  };
}

export function getBoardFailure() {
  return {
    type: "@game/GET_BOARD_FAILURE",
  };
}

export function moveRequest(id) {
  return {
    type: "@game/MOVE_REQUEST",
    payload: { id },
  };
}

export function moveSuccess() {
  return {
    type: "@game/MOVE_SUCCESS",
  };
}

export function moveFailure() {
  return {
    type: "@game/MOVE_FAILURE",
  };
}

export function restartRequest() {
  return {
    type: "@game/RESTART_REQUEST",
  };
}

export function restartSuccess() {
  return {
    type: "@game/RESTART_SUCCESS",
  };
}

export function restartFailure() {
  return {
    type: "@game/RESTART_FAILURE",
  };
}
