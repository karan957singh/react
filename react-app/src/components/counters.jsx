import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {

    render() {
        return (
            <React.Fragment>
                <button className="btn btn-primary btn-sm m-2" onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map(counter=><Counter key={counter.id}
                                                           counter={counter}
                                                           onDelete={this.props.onDelete}
                                                           onIncrement={this.props.onIncrement}
                                                           onDecrement={this.props.onDecrement}>
                <h4>Title</h4>
                <h3>New Title</h3>
                </Counter>)}
            </React.Fragment>
        );
    }
}

export default Counters;
