import { combineReducers } from "redux";
import { todosReducer } from "./todosReducer";
import { columnsReducer } from "./columnsReducer";

import { persistentDocumentReducer } from "redux-pouchdb";
import { db } from "../store/db";

const rootReducer = combineReducers({
  todosReducer,
  columnsReducer,
});

const rootReducerName = "rootReducer";
export const finalReducer = persistentDocumentReducer(
  db("testdb"),
  rootReducerName
)(rootReducer);
