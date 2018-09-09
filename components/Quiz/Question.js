import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './Quiz.style';

export default function Question ({item, onPress}) {
    return (
        <View style={styles.question}>
            <Text style={styles.questionText}>{item.question}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.link}>Answer</Text>
            </TouchableOpacity>
        </View>
    )
}
