import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import SingleShelf from "./SingleShelf";

class Shelves extends React.Component{

    componentDidMount() {

    }

    render() {


        return (

            <div>

            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>

                        <SingleShelf
                            books={this.props.books.filter(book => book.shelf==='currentlyReading')}
                            shelf={"Currently Reading"}
                        />

                        <SingleShelf
                            books={this.props.books.filter(book => book.shelf==='wantToRead')}
                            shelf={"Want To Read"}
                        />

                        <SingleShelf
                            books={this.props.books.filter(book => book.shelf==='read')}
                            shelf={"Read"}
                        />


                    </div>
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