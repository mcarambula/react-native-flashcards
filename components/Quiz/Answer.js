import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './Quiz.style';

function Answer({item, onPress}) {
    return (
        <View style={[styles.card, styles.backCard]} >
            <View style={styles.question}>
                <Text style={styles.answerText}>{item.answer}</Text>
            </View>
            <TouchableOpacity onPress={onPress}
                style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.link}>Show Question</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Answer;
