import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
    state = {
        count: 0
    };
    //   constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    //   }
    render() {
        return (
            <React.Fragment>
                <Counter />
                <Counter/>
                <Counter/>
                <Counter/>
            </React.Fragment>
        );
    }
}

export default Counters;
