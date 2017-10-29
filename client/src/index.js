import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js"
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
//import materializeCSS from "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/css/materialize.min.css";
import axios from "axios";
window.axios=axios;
const store = createStore(reducers,{},applyMiddleware(reduxThunk));

ReactDOM.render(

    <Provider store={store}><App /></Provider>,
    document.querySelector("#root")
    
);
console.log("Stripe key is",process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is",process.env.NODE_ENV);
