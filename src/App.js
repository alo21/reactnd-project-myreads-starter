import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from "./Search";
import Shelves from "./Shelves";
import {Route} from "react-router-dom";


class BooksApp extends React.Component {
  state = {
    books: [],
    booksToDisplay: []
  };

getBooksByShelf(shelf){

  const filteredBooks = this.state.books.filter(book => book.shelf===shelf);
  this.state({booksToDisplay: filteredBooks})
}

  componentDidMount() {
      BooksAPI.getAll().then(result =>{
        this.setState({books: result});
        console.log(this.state.books)
      }).catch(err => console.log(err));


  }

  render() {
    return (
      <div className="app">

        <Route exact path={"/"} render={()=>(
            <Shelves books={this.state.books}/>
        )} />

        <Route path={"/search"} render={()=>(
            <Search/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
