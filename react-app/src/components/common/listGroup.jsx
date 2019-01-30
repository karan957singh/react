import React from 'react';

const ListGroup = (props) => {
    // if (props.currentGenre === null){
    //     let styleClass =
    // }
    return (
        <ul className="list-group">
            {props.items.map(g=>(
                <li key={g.id} className= {props.selectedItem===g.id?"list-group-item active":"list-group-item"} onClick={()=>props.onItemSelect(g)}>{g.name}</li>
            ))}
        </ul>
    );
};

export default ListGroup;
