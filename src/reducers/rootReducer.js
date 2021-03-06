import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { columnsReducer } from "./columnsReducer";

import { persistentDocumentReducer } from "redux-pouchdb";
import { db } from "../store/db";

const rootReducer = combineReducers({
  todosReducer,
  columnsReducer,
});

const reducerName = "rootReducer";

export const finalReducer = persistentDocumentReducer(
  db("TaskManagerDB"),
  reducerName
)(rootReducer);
