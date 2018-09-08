import React from 'react';
import { AsyncStorage } from 'react-native';
import decks from './decks.json';
export const STORAGE_KEY = 'FlashCards:Marion';

function setInitData() {
    console.log('-----ninicial data');
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks));
  return decks;
}

function getFrom(results) {
    console.log('storage');
    return JSON.parse(results);
}
export const retrieveDecks = async () => {
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        return (results) ?  getFrom(results) : setInitData();
    })
}

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
        return decks[title];
    })
}
