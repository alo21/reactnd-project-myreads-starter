import React from 'react'
import './App.css'


class Select extends React.Component{


    render() {
        return(


            <div className="book-shelf-changer">

                <select ref="ShelfSelection"
                        defaultValue={this.props.defaultSelection}
                        onChange={(event => this.props.onSelectionChange(this.props.book ,this.refs.ShelfSelection.value))}>

                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default Select