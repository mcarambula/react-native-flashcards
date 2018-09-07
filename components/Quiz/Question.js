import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Quiz.style';

export default function Question () {
    return (
        <View style={styles.question}>
            <Text style={styles.questionText}>Does React Native work with Android?</Text>
            <TouchableOpacity onPress={()=>console.log('Pressed!')}>
                <Text style={styles.answerText}>Answer</Text>
            </TouchableOpacity>
        </View>
    )
}
