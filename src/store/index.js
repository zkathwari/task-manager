import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//reducers
import { finalReducer } from "../reducers";

import { persistStore } from "redux-pouchdb";

// store
export const store = createStore(finalReducer, composeWithDevTools());
persistStore(store);
