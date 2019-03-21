// State argument are not application state, only the state this reducer is responsible for
import { BOOK_SELECTED } from '../actions'

export default function (state = null, action) {
    switch(action.type){
        case BOOK_SELECTED:
            return action.payload;
    }

    return state
}