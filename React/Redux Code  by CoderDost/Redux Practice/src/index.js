import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { AccountReducer } from "./Reducers/AccountReducer";
import { BonusReducer } from "./Reducers/BonusReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { store } from "./store";


// const store=createStore(combineReducers({account:AccountReducer,bonus:BonusReducer}),applyMiddleware(logger,thunk))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
          <React.StrictMode>
                 <App />
  </React.StrictMode>
  </Provider>
 
);
