import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import SingleShelf from "./SingleShelf";
import {debounce} from 'throttle-debounce';

class Search extends React.Component{

    constructor(pros){
        super(pros);

        this.doTheResearch = debounce(1000, this.doTheResearch)

    }

    state = {
        result: [],
        query: '',
        noResults: false
    };

    updateQuery(query){
        this.setState({query: query});

        if(query !== '') {
            this.doTheResearch(query);
        } else {
            this.setState(()=>({
                result: []
            }));
        }
    }


    isInMyShelf(bookToScan){


        for(let el of this.props.books){


            if(el.id === bookToScan.id){
                return 'wantToRead'
            }
        }

        return 'none'


    }

    doTheResearch(query){

        BooksAPI.search(query)
            .then(res => {

                if(res.items!==undefined && res.items.length===0){
                    this.setState(() => ({
                        noResults: true
                    }))
                }

                res.forEach((el) => {

                    el.shelf = this.isInMyShelf(el);

                    if(el.imageLinks===undefined || (el.imageLinks.length > 0 &&  el.imageLinks.smallThumbnail===undefined)){
                        el.imageLinks = [];
                        el.imageLinks.smallThumbnail = ''
                    }
                });

                this.setState(() => ({
                    result: res,
                    noResults: false

                }));
            })
            .catch(err => {
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

                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={evt=>this.updateQuery(evt.target.value)}/>

                </div>
            </div>


                <div className="search-books-results">


                    <ol className="books-grid">

                        {/*{console.log("Before passing to SingleShelf", this.state.result)}*/}

                        {!this.state.noResults &&
                            <SingleShelf
                                books={this.state.result}
                                onSelectionChange={this.props.onSelectionChange}
                            />
                        }

                        {this.state.noResults &&
                            <h1>Books not found</h1>

                        }




                    </ol>
                </div>


        </div>

        )


    }


}

export default Search