import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Counter from "./components/counter";

import "bootstrap/dist/css/bootstrap.css";
import 'font-awesome/css/font-awesome.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(<Counter />, document.getElementById("coot"));
// ReactDOM.render(<Movies />, document.getElementById("coot"));
registerServiceWorker();
