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
            books: []
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


        this.setState(() => ({
            books: tempBooks

        }));

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
            <Search/>
        )}/>

      </div>
    )
  }
}

export default BooksApp
