import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BookDetail extends Component {

    render() {
        return (
            <div>
                {this.props.book ?
                    <div>
                        <h5>Details for:</h5>
                        <h6>Title: {this.props.book.title}</h6>
                        <h6>Author: {this.props.book.author}</h6>
                    </div>
                    : <div>Please, select a book</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);
