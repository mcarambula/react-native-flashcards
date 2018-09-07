import React from 'react';
import { AsyncStorage } from 'react-native';
import decks from './decks.json';
export const STORAGE_KEY = 'FlashCards:Marion';

export const retrieveDecks = async () => {
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        return (results) ? JSON.parse(results) : decks;
    })
}
