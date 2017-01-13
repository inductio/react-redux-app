import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <App/>
    </Provider>, document.getElementsByClassName('container')[0]
);
