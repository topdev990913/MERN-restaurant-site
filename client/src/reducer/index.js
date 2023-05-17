import { INCREMENT, DECREMENT, SETDEFAULT } from "./actions/types";
const reducer = (state = [], action) => {
  const i = action?.payload?.index;
  const j = action?.payload?.id;
  switch (action.type) {
    case INCREMENT:
      state[i - 1].products[j - 1].clicks++;
      return [...state];
    case DECREMENT:
      state[i - 1].products[j - 1].clicks--;
      return [...state];
    case SETDEFAULT: {
      console.log("default-set.");
      state = action?.payload?.data;
      return state;
    }
    default:
      return state;
  }
};
export default reducer;
