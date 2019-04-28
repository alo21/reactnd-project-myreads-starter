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
            let tempBooks = this.state.books;

            tempBooks.forEach((el)=>{

                if(el.id === book.id){
                    el.shelf = newValue
                }
            });

            let filteredBook = tempBooks.filter(el => el.id===book.id);

            if(filteredBook.length===0){
                book.shelf = newValue;
                tempBooks.push(book);
            }


            this.setState(() => ({
                books: tempBooks

            }));

        }).catch(e => {
            console.error(e)
        });
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
