import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { selectAuthorBooksAction } from '../actions/index';

class AuthorsList extends Component {
    constructor() {
        super();
    }

    renderList() {
        return this.props.authors.map(author => <li
            key={author.name}
            className={ author.name === this.props.activeAuthor ? 'list-group-item active' : 'list-group-item'}
            onClick={() => this.props.selectAuthorBooksAction(author, this.props.books)}
        >
            {author.name}
        </li>);
    }

    render() {
        return (
            <ul className="list-group col-md-4">
                <li
                    className="list-group-item"
                    onClick={() => this.props.selectAuthorBooksAction({}, this.props.books)}
                >
                    Показать книги всех авторов
                </li>
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        authors: state.authors,
        books: state.books,
        activeAuthor: state.activeAuthorBooks.length && state.activeAuthorBooks.activeAuthor
    }
}

// Anything returned from this function will end up as props
// on the bookList container
function mapDispatchToProps(dispatch) {
    // WhenEver selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectAuthorBooksAction: selectAuthorBooksAction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsList);