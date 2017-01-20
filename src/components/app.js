import React, { Component } from 'react';
import BookList from '../containers/bookList';
import AuthorList from '../containers/authorsList';

export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <AuthorList />
                </div>
                <div>
                    <BookList />
                </div>
            </div>
        );
    }
}