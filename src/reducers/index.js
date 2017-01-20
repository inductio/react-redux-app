import { combineReducers } from 'redux';
import reducerBooks from './reducerBooks';
import reducerAuthors from './reducerAuthors';

const rootReducer = combineReducers({
    books: reducerBooks,
    authors: reducerAuthors
});

export default rootReducer;