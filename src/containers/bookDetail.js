import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BookDetail extends Component {

    render() {
        return (
            <div>
                <h5>Details for:</h5>
                <div>{this.props.book ? this.props.book.title: null}</div>
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
