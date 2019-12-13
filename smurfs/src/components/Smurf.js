import React from 'react';

export default function(props){
    return(
        <li>
            <div>Name: {props.name}</div>
            <div>Age: {props.age}</div>
            <div>Height: {props.height}</div>
        </li>
    )
}