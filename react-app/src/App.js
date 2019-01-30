import React, { Component } from 'react';
import './App.css';
import Navbar from'./components/navbar';
import Movies from "./components/movies";
import Counters from "./components/counters";
import {Route, Switch, Redirect, HashRouter} from "react-router-dom";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

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
            <ToastContainer/>
        {/*<Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>*/}
        <Navbar />
     <main className="container">
         <Switch>
             <Route path="/login" component={LoginForm}/>
             <Route path="/register" component={RegisterForm}/>

             <Route path="/movies/:id" component={MovieForm}/>
             <Route path="/movies/new" component={MovieForm}/>
             <Route path="/movies" component={Movies}></Route>
             <Route path="/customers" component={Customers}></Route>
             <Route path="/Rentals" component={Rentals}></Route>
             <Redirect from="/" exact to="/movies"></Redirect>
             <Route path="/" component={NotFound}/>
         </Switch>
         {/*<Counters*/}
             {/*counters={this.state.counters}*/}
             {/*onReset={this.handleReset}*/}
             {/*onDelete={this.handleDelete}*/}
             {/*onIncrement={this.handleIncrement}*/}
             {/*onDecrement={this.handleDecrement}*/}

         {/*/>*/}
     </main>
        </React.Fragment>
    );
  }
}

export default App;
