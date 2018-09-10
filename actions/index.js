export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';
import * as API from '../utils/api';

export const handleInitialData = () => (dispatch) => {
    return API.retrieveDecks()
            .then((decks) => {
                dispatch(getDecks(decks));
            });
}

export function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addQuestion(deckId, question) {
    return {
        type: ADD_QUESTION,
        deckId,
        question
    }
}
