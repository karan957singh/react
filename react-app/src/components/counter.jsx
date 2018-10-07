import React, { Component } from "react";
class Counter extends Component {

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   componentDidUpdate(prevProps, prevState){
  //       console.log("Component DidUpdate");
  //       console.log("Prev Props: ", prevProps);
  //       console.log("Prev State: ", prevState);
  //   }
    componentWillUnmount(){
        console.log("Component will unmount!");

    }

  render() {
    return (
      <React.Fragment>
          <div className="row">
          {/*{this.props.children[1]}*/}
          <div className="col-1">
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={()=>this.props.onIncrement(this.props.counter)}
              // onClick={()=>this.handleIncrement(this.state.count)}
              className="btn btn-secondary btn-sm m-2">
              +
            </button>
              <button
                  onClick={()=>this.props.onDecrement(this.props.counter)}
                  // onClick={()=>this.handleIncrement(this.state.count)}
                  className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value===0?"true":"false"}>
                  -
              </button>
              <button className="btn btn-danger btn-sm m-2"
              onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
          </div>
          </div>
      </React.Fragment>
    );
  }
  // handleIncrement = (product) => {
  //     console.log(product);
  //   this.setState({ count: this.props.counter.value+ 1 });
  // };
  //   handleDelete = () => {
  //       console.log("Deleted");
  //   };
  formatCount() {
    let count = this.props.counter.value;
    return count === 0 ? <h6>Zero</h6> : count;
  }
}

export default Counter;
