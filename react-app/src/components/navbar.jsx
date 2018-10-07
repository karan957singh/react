import React, {Component} from 'react';

const Navbar = ({totalCounters}) =>{
    return(
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Counters: {totalCounters}</a>
        </nav>
    );
};

// class Navbar extends Component{
//
//
//     render(){
//         return(
//             <nav className="navbar navbar-light bg-light">
//                 <a className="navbar-brand" href="#">Counters: {this.props.totalCounters}</a>
//             </nav>
//         );
//     }
// }
export default Navbar;