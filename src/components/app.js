import React, { Component } from 'react';
import BookList from '../containers/bookList';
import AuthorList from '../containers/authorsList';
import BookDetail from '../containers/bookDetail';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="authors">
                    <AuthorList />
                </div>
                <div>
                    <BookList />
                </div>
                <div>
                    <BookDetail/>
                </div>
            </div>
        );
    }
}