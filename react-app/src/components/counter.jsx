import React, { Component } from "react";
class Counter extends Component {
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
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button
          // onClick={this.handleIncrement}
          onClick={()=>this.handleIncrement(this.state.count)}
          className="btn btn-secondary btn-sm"
        >
          Submit
        </button>
      </React.Fragment>
    );
  }
  handleIncrement = (product) => {
      console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  formatCount() {
    let { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
