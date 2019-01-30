import React from "react";
import ReactDOM from "react-dom";
import "../src/index.css";
// import Counter from "./components/counter";
import {BrowserRouter} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.css';
import App from "../src/App";
import registerServiceWorker from "../src/registerServiceWorker";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter> , document.getElementById("root"));

// ReactDOM.render(<Counter />, document.getElementById("coot"));
// ReactDOM.render(<Movies />, document.getElementById("coot"));
registerServiceWorker();
