export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';
import * as API from '../utils/api';

/* Async action creator to retreive initial data */
export const handleInitialData = () => (dispatch) => {
    return API.retrieveDecks()
            .then((decks) => {
                dispatch(getDecks(decks));
            });
}
/* Action creator to get the decks from the store */
export function getDecks(decks) {
    return {
        type: GET_DECKS,
        decks
    }
}
/* Action create to add a new deck */
export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}
/* Action creator to add a new question to a specific deck */
export function addQuestion(deckId, question) {
    return {
        type: ADD_QUESTION,
        deckId,
        question
    }
}
