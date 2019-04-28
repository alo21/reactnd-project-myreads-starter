import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from "./Search";
import Shelves from "./Shelves";
import {Route} from "react-router-dom";
import {update} from "./BooksAPI";


class BooksApp extends React.Component {

    constructor(props){
        super(props);

        this.onSelectionChange = this.onSelectionChange.bind(this);

        this.state = {
            books: [],
        };
    }


    onSelectionChange(book, newValue) {

        update(book, newValue).then(()=>{
            console.log("Shelf updated correctly")
        }).catch(e => {
            console.log("Something went wrong", e)
        });

        let tempBooks = this.state.books;

        tempBooks.forEach((el)=>{

            if(el.id === book.id){
                el.shelf = newValue
            }
        });


        let filteredBook = tempBooks.filter(el => el.id===book.id);

        console.log(filteredBook);

        if(filteredBook.length===0){
            book.shelf = newValue;
            tempBooks.push(book);
            console.log(book);
            console.log("added book to the state")
        }


        this.setState(() => ({
            books: tempBooks

        }));

        console.log("After updating the state", this.state.books)

    };


  componentDidMount() {
      BooksAPI.getAll().then(result =>{
        this.setState({books: result});
      }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="app">

        <Route exact path={"/"} render={()=>(

            <Shelves
                books={this.state.books}
                onSelectionChange={this.onSelectionChange}

            />
        )} />

        <Route path={"/search"} render={()=>(
            <Search
                onSelectionChange={this.onSelectionChange}
            />
        )}/>

      </div>
    )
  }
}

export default BooksApp
