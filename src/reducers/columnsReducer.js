// todoColumnReducer
import { columns } from "../data/todoColumns";

export function columnsReducer(state = { columns }, action) {
  switch (action.type) {
    case "ADD_COLUMN":
      return {
        ...state,
        columns: [
          ...state.columns,
          action.payload.name !== "" && action.payload,
        ],
      };
    default:
      return state;
  }
}
