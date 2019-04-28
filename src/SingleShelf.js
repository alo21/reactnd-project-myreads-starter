import React from 'react'
import './App.css'
import Select from "./Select";

class SingleShelf extends React.Component {


    render() {
        return (

            <div>


                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.shelf}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">

                            {this.props.books.map(((book) => (

                                <li key={book.id}>

                                    <div className="book">


                                        <div className="book-top">
                                            <div className="book-cover" style={{
                                                width: 128,
                                                height: 193,
                                                backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')'
                                            }}></div>
                                            <Select
                                                defaultSelection={book.shelf}
                                                book={book}
                                                onSelectionChange={this.props.onSelectionChange}

                                            />
                                        </div>
                                        <div className="book-title">{book.title}</div>

                                        {book.authors.map((auth, index) => (
                                            <div className="book-authors" key={book.id + ':auth:' + index}>{auth}</div>
                                        ))}

                                    </div>

                                </li>

                            )))}
                        </ol>
                    </div>
                </div>


            </div>


        )
    }

}

export default SingleShelf