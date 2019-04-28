import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import SingleShelf from "./SingleShelf";

class Shelves extends React.Component{

    constructor(props){
        super(props);
        const shelves =
            [['Currently Reading', 'currentlyReading'],
            ['Want to Read', 'wantToRead'],
            ['Read', 'read']];

        this.state = {
            shelves: shelves

        }

    }

    render() {

        return (

            <div>

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <div className="list-books-content">

                        {this.state.shelves.map((shelf) => (


                            <SingleShelf
                                books={this.props.books.filter(book => book.shelf===shelf[1])}
                                shelf={shelf[0]}
                                onSelectionChange={this.props.onSelectionChange}
                                key={shelf[1]}
                            />


                        ) )}



                </div>
                <div className="open-search">
                    <Link to={"/search"}>
                        <button>Add a book</button>
                    </Link>


                </div>
            </div>

            </div>
    )
    }

}

export default Shelves