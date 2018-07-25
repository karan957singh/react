import React, {Component} from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";


import App from "./components/app";

ReactDom.render(<App />, document.selectElementById(".container"));