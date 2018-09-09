import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Quiz.style';

export default function Answer({item, onPress}) {
    return (
        <View style={styles.question}>
            <Text style={styles.answerText}>{item.answer}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.link}>Question</Text>
            </TouchableOpacity>
        </View>
    )
}
