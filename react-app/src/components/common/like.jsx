import React, {Component} from 'react';

const Like = (props) =>{
        let class_name="fa fa-heart"+(props.movie.liked?"":"-o");
        return (
            <div>
                <i className={class_name} style={{cursor:"pointer"}} aria-hidden="true" onClick={props.onClick}></i>
            </div>
        );
};



export default Like;
