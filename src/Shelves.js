import React from 'react'
import './App.css'
import {Link} from "react-router-dom";
import SingleShelf from "./SingleShelf";

class Shelves extends React.Component{

    componentDidMount() {
        console.log(this.props.books)
    }

    render() {

        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>

                        <SingleShelf/>

                        <SingleShelf/>

                        <SingleShelf/>


                    </div>
                </div>
                <div className="open-search">
                    <Link to={"/search"}>
                        <button>Add a book</button>
                    </Link>


                </div>
            </div>
        )
    }

}

export default Shelves