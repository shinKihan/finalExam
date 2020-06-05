import React from 'react';

function BookForm( props ){
    return(
        <div>
            {/* Your code goes here */}
                <form onSubmit={props.submitHandler}>
                    <label htmlFor="bookName">Book name</label>
                    <input name="bookName" id="bookname" type="text"></input>
                    <button type="submit">Search</button>
                </form>
            
        </div>
    );
}

export default BookForm;