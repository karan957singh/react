import React, {Component} from 'react';

class Counter extends Component{
    componentDidUpdate(prevProps, prevState){
        //ajax calls or something
    }
    componentWillUnmount(){
        //somethign when this component get removed from DOM
    }

    render(){
        let classes = this.getBadgeClasses();
        return(
        <div>
            <span className={classes}>{this.formatCount()}</span>
            {/*<button onClick={()=>this.handleIncrement({id:1})} className="btn btn-secondary btn-sm">Increment</button>*/}
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

        </div>
    );
    }
    handleIncrement = () =>{
        // console.log(someVar);
        this.setState({count: this.state.count +1});
    }
    renderTags(){
        if(this.state.tags.length ===0){
            return <p>There are no Tags</p>
        }
        else{
        return <ul>
            {this.state.tags.map(tag=><li key={tag}>{ tag }</li>)}
        </ul>;
        }
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }
    formatCount(){
        const value = this.props.counter.value;
        return value ===0?'Zero':value;
    }
}

export default Counter;