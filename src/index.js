import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskContainer from "./components/TaskContainer";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TaskContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
