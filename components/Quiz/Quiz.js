import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Filled from '../TextButton/Filled';

export default function Quiz () {
    questionNumber = () => {
        return <Text style={styles.questionNumber}>2 / 2</Text>;
    }
    return (
        <View style={{flex: 1}}>
            { this.questionNumber() }
            <View style={styles.quizContainer}>
                <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.question}>Does React Native work with Android?</Text>
                    <TouchableOpacity onPress={()=>console.log('Pressed!')}>
                        <Text style={styles.answerText}>Answer</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <Filled> Correct </Filled>
                    <Filled> Incorrect </Filled>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    quizContainer: {
        flex: 1,
        padding: 20
    },
    questionNumber: {
        zIndex: 2,
        fontSize: 16,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    question: {
        fontSize: 50,
        textAlign: 'center'
    },
    answerText: {
        color: 'red',
        fontSize: 20,
        marginTop: 20
    },
    btnContainer: {
        padding: 30,
        justifyContent: 'flex-end'
    }
})
