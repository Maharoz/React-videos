import './Header.css';
import React from 'react';
const Header =(props) =>{
    return (
        <div className="top-margin content-align">
        <div className="ui red label">
        <h1>React</h1>
        </div>
        <div className="ui violet label">
        <h1>Tube</h1>
        </div>
        </div>
        
    );
};

export default Header;