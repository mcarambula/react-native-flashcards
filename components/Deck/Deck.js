import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Outlined from '../TextButton/Outlined';
import Filled from '../TextButton/Filled';

export default function Deck () {
    return (
        <View style={styles.deckContainer}>
            <View style={styles.titleContainer}>
                <Text style={{fontSize: 35}}>udacicards</Text>
                <Text style={{fontSize: 18, color: 'gray', margin: 10}}>3 cards </Text>
            </View>
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
    titleContainer: {
        flex: 2,
        justifyContent:'center',
        alignItems: 'center'
    },
    btnContainer: {
        justifyContent: 'flex-end',
        padding: 30
    }
})
