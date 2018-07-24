import React, { Component } from 'react';

const NavBar = ({totalCounters}) =>{
        return (
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#" />
                    React App
                    <span className="badge badge-pill badge-secondary">{totalCounters}</span>
            </nav>
        );
}

export default NavBar;
