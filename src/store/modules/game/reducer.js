import produce from "immer";

const INITIAL_STATE = {
  board: [null, null, null, null, null, null, null, null, null],
  status: "opened",
  next: "X",
  count: 0,
  winner: null,
  loading: false,
  moveLoading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case "@game/GET_STATUS_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@game/GET_STATUS_SUCCESS": {
        draft.status = action.payload.status;
        draft.next = action.payload.next;
        draft.winner = action.payload.winner;
        draft.count = action.payload.count;
        draft.loading = false;
        break;
      }

      case "@game/GET_STATUS_FAILURE": {
        draft.loading = false;
        break;
      }

      case "@game/GET_BOARD_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@game/GET_BOARD_SUCCESS": {
        draft.board = action.payload.board;
        draft.loading = false;
        break;
      }

      case "@game/GET_BOARD_FAILURE": {
        draft.loading = false;
        break;
      }

      case "@game/MOVE_REQUEST": {
        draft.moveLoading = true;
        break;
      }

      case "@game/MOVE_SUCCESS": {
        draft.moveLoading = false;
        break;
      }

      case "@game/MOVE_FAILURE": {
        draft.moveLoading = false;
        break;
      }

      case "@game/RESTART_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@game/RESTART_SUCCESS": {
        draft.loading = false;
        break;
      }

      case "@game/RESTART_FAILURE": {
        draft.loading = false;
        break;
      }
    }
  });
}
