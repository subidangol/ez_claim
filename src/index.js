import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/login.js";
import Promise from "redux-promise";
const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/app" component={App} />
        </Switch>

        {/* <Switch>
          <Route path="/page" component={App} />
        </Switch> */}
      </div>
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
