import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import SingleShelf from "./SingleShelf";

class Search extends React.Component{

    state = {
        result: [],
        query: ''

    };

    updateQuery(query){
        this.setState({query: query});
        this.doTheResearch(query)
    }

    doTheResearch(query){

        BooksAPI.search(query)
            .then(res => {
                this.setState({result: res});
                console.log(res)
            }).catch(err => {
            console.log(err)
        });

    }


    render() {
        return(

        <div className="search-books">

            <div className="search-books-bar">
                <Link to={"/"}>
                    <button className="close-search">Close</button>
                </Link>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={evt=>this.updateQuery(evt.target.value)}/>

                </div>
            </div>


                <div className="search-books-results">


                    <ol className="books-grid">

                            <SingleShelf
                                books={this.state.result}
                            />



                    </ol>
                </div>


        </div>

        )


    }


}

export default Search