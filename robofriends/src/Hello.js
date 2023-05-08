import React, {Component} from "react";
import './hello.css';
import 'tachyons';
const Hello = (props) => {
    return(
        <div className='f1 tc'>
            <h1> HELLLOOOOO </h1>
            <p>{props.greeting}</p>
        </div>
    )
}

export default Hello