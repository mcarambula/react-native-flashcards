import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Quiz.style';

export default function Answer() {
    return (
        <View style={styles.question}>
            <Text style={styles.questionText}>Yes!</Text>
            <TouchableOpacity onPress={()=>console.log('Pressed!')}>
                <Text style={styles.answerText}>Question</Text>
            </TouchableOpacity>
        </View>
    )
}
