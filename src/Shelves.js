import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import SingleShelf from "./SingleShelf";

class Shelves extends React.Component{

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
                            onSelectionChange={this.props.onSelectionChange}
                        />

                        <SingleShelf
                            books={this.props.books.filter(book => book.shelf==='wantToRead')}
                            shelf={"Want To Read"}
                            onSelectionChange={this.props.onSelectionChange}
                        />

                        <SingleShelf
                            books={this.props.books.filter(book => book.shelf==='read')}
                            shelf={"Read"}
                            onSelectionChange={this.props.onSelectionChange}
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