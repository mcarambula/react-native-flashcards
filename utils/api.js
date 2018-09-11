import React from 'react';
import { AsyncStorage } from 'react-native';
import decks from './decks.json';
export const STORAGE_KEY = 'FlashCards:Marion';

/* Retreiving initial data for the application */
export const retrieveDecks = async () => {
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        return (results) ? JSON.parse(results) : setInitData();
    })
}
/* Setting the initial on the storage */
function setInitData() {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
    return decks;
}
/* Function that creates the deck object given the title */
export const createDeck = (title) => {
    return retrieveDecks().then((decks) => {
        if (!decks[title]) {
            const newDeck = {
                [title]: {
                  'title': title,
                  'questions': [],
                },
            }
            AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(newDeck));
            return newDeck;
        }
        // the title already exists
        throw "Exists";
    })
}
/*
    Function that creates the
    question object given the title (deckId), the question and the answer
*/
export const createQuestion = ({question, answer, deckId}) => {
    return retrieveDecks().then((decks) => {
        decks[deckId].questions.push({question, answer})
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
    })
}
