import { combineReducers } from 'redux';
import { ADD_DECK, ADD_QUESTION, GET_DECKS } from '../actions';

const decks = (state = {}, action) => {
    switch (action.type) {
        case GET_DECKS :
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK :
            return {
                ...state,
                ...action.deck,
            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.deck.id] : {
                    ...state[action.deck.id],
                    questions: state[action.deck.id].questions.concat([action.question])
                }
            };
        default :
            return state;
    }
}

export default combineReducers({
    decks
});
