import { INCREMENT, DECREMENT, SETDEFAULT } from "./types";
export function increment(index, id) {
  return {
    type: INCREMENT,
    payload: {
      index,
      id,
    },
  };
}
export function decrement(index, id) {
  return {
    type: DECREMENT,
    payload: {
      index,
      id,
    },
  };
}
export function setDefault(data) {
  return {
    type: SETDEFAULT,
    payload: {
      data : data
    },
  };
}
