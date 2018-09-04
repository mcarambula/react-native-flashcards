import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Outlined from '../TextButton/Outlined';
import Filled from '../TextButton/Filled';
import DeckCard from './DeckCard';

export default function Deck () {
    return (
        <View style={styles.deckContainer}>
            <DeckCard title='udacicards' howMany={3}/>
            <View style={styles.btnContainer}>
                <Outlined> Add Card </Outlined>
                <Filled> Start Quiz </Filled>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    deckContainer: {
        padding: 40,
        flex: 1
    },
    btnContainer: {
        justifyContent: 'flex-end',
        padding: 30
    }
})
