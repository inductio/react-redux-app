import { combineReducers } from 'redux';
import reducerBooks from './reducerBooks';
import reducerAuthors from './reducerAuthors';
import ActiveBook from './reducerActiveBook';

const rootReducer = combineReducers({
    books: reducerBooks,
    authors: reducerAuthors,
    activeBook: ActiveBook
});

export default rootReducer;