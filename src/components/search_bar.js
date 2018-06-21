import React, { Component } from 'react';
class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {term:''};
	}
	render(){
		// return <input onChange = { this.onInputChange } />;
		// return <input onChange = {(event) => console.log(event.target.value) } />;
		return (
			<div className="search-bar">
			<input
			value={this.state.term}
			 onChange = {event => this.onInputChange(event.target.value) } />
			 <button className="btn btn-primary" 
			 onClick={() => this.onInputChange()}>Search</button>
			</div>
			);
	} 

	onInputChange(term){
		this.setState({term});
		console.log(term);
		this.props.onSearchTermChange(term);
	}
// 	onInputChange(event){ 
// 	console.log(event);

// }
}

// const SearchBar = () =>{
  // return <input />;
// }
export default SearchBar;