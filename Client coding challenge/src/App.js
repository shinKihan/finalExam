import React from 'react';
import './App.css';
import Book from './Book';
import BookForm from './BookForm';

class App extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      /*Your code goes here*/
      apiUrl: "https://www.googleapis.com/books/v1/volumes?q=",
      books: []
    }
  }

  /* Your code goes here*/
  handleApiSearch =(event) => {
    event.preventDefault();
    const settings = {
      method: 'GET'
    }
  }

  render(){
    return(
      <div>
        {/* Your code goes here*/}
        <BookForm onSubmit={this.handleApiSearch}></BookForm>
      </div>
    )
  }

}

export default App;
