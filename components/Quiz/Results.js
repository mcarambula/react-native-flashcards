import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Outlined from '../TextButton/Outlined';
import Filled from '../TextButton/Filled';
import styles from './Quiz.style';

export default function Results({score, howMany,  goHome, resetQuiz}) {
    const comment = (score / howMany *  100 >= 90)
                        ? "Woooh! Excellent job! 🙌🏻"
                        : ((score / howMany *  100 >= 75)
                            ? "Keep it up! You are doing a great job! 😊"
                            : "That wasn't so good. Keep trying! 💪🏻");
    return (
        <View style={{flex:1, padding: 20}}>
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.answerText}>Score {score} / {howMany}</Text>
                <Text style={styles.answerText}>{comment}</Text>
            </View>
            <Outlined onPress={resetQuiz}>Reset</Outlined>
            <Filled onPress={goHome} style={{marginTop: 10}}>Go to home</Filled>
        </View>
    )
}
