import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { columnsReducer } from "./columnsReducer";

export const rootReducer = combineReducers({
  todosReducer,
  columnsReducer,
});
