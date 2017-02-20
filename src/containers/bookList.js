import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectBook from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                >
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // WhatEver is returned will up as props
    // inside of Booklist
    return {
        books: state.books
    }
}

// Anything returned from this function will end up as props
// on the bookList container
function mapDispatchToProps(dispatch) {
    // WhenEver selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook }, dispatch)
}


// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectedBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);