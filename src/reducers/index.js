import { combineReducers } from 'redux';
import reducerBooks from './reducerBooks';

const rootReducer = combineReducers({
    books: reducerBooks
});

export default rootReducer;