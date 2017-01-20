import React, { Component } from 'react';

import { connect } from 'react-redux';

class AuthorsList extends Component {
    constructor() {
        super();
    }

    renderList() {
        return this.props.authors.map(author => <li key={author.name} className="list-group-item">{author.name}</li>);
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
    return {
        authors: state.authors
    }
}

export default connect(mapStateToProps)(AuthorsList);