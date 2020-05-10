import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//reducers
import { rootReducer } from "../reducers/rootReducer";

// store
export const store = createStore(rootReducer, composeWithDevTools());
