import React from 'react';

function Book( props ){
    return(
        <div>
            {/*Your code goes here*/}
            <img src={props.thumbnail}></img>
            <p>Title: {props.title}</p>
            <p>Author: {props.author}</p>
            <p>Snippet: {props.snippet}</p>
        </div>
    );
}

export default Book;