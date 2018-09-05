import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Outlined from '../TextButton/Outlined';
import Filled from '../TextButton/Filled';
import DeckCard from './DeckCard';
import styles from './Deck.style';
import generalStyles from '../General/General.style';

export default function Deck () {
    return (
        <View style={generalStyles.container}>
            <DeckCard title='udacicards' howMany={3}/>
            <View style={generalStyles.btnContainer}>
                <Outlined>Add Card</Outlined>
                <Filled>Start Quiz</Filled>
            </View>
        </View>
    )
}
