// State argument are not application state, only the state this reducer is responsible for
import { AUTHOR_SELECTED } from '../actions'

export default function (state = [], action) {
    switch(action.type){
        case AUTHOR_SELECTED: return action.payload;
    }

    return state
}