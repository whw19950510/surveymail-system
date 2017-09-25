import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js"
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
//import materializeCSS from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/css/materialize.min.css";

const store = createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(

    <Provider store={store}><App /></Provider>,
    document.querySelector("#root")

);