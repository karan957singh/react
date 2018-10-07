import React, { Component } from 'react';
import './App.css';
import Navbar from'./components/navbar';
// import Movies from "./components/movies";
import Counters from "./components/counters";

class App extends Component {

    state = {
        counters: [
            {id:1,value:0},
            {id:2,value:1},
            {id:3,value:9},
            {id:4,value:0},
            {id:5,value:0},
            {id:6,value:3},
            {id:7,value:2},
        ]
    };
      constructor(props) {
        super(props);
        console.log('App - Constructor', this.props);
        // this.handleIncrement = this.handleIncrement.bind(this);
      }

      componentDidMount(){
          console.log("App- Mounted");
}



    handleReset=()=>{
        console.log("Reset called!");
        this.setState({
            counters:this.state.counters.map(c =>{c.value=0; return c;})
        });
    };
    handleDelete=(id)=>{
        console.log("Handle delete called!");
        this.setState({
            counters:this.state.counters.filter(c => c.id !== id)
        });
    };
    handleIncrement=(counter)=>{
        console.log("Increment called!");
        this.setState({
            counters:this.state.counters.map(c => {
                if (c.id ===counter.id)
                {
                    c.value+=1;
                }
                return c;

            })
        });
    };

    handleDecrement=(counter)=>{
        console.log("Decrement called!");
        this.setState({
            counters:this.state.counters.map(c => {
                if (c.id ===counter.id && c.value>0)
                {
                    c.value -=1;
                }
                return c;

            })
        });
    };



  render() {
      console.log("App-Rendered");
    return (
        <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
     <main className="container">
         {/*<Movies/>*/}
         <Counters
             counters={this.state.counters}
             onReset={this.handleReset}
             onDelete={this.handleDelete}
             onIncrement={this.handleIncrement}
             onDecrement={this.handleDecrement}

         />
     </main>
        </React.Fragment>
    );
  }
}

export default App;
