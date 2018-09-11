import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './Quiz.style';

function Question({item, onPress}) {
    return (
        <View style={styles.card} >
            <View style={styles.question}>
                <Text style={styles.questionText}>{item.question}</Text>
            </View>
            <TouchableOpacity onPress={onPress}
                style={{flex: 1, justifyContent: 'center'}}>
                <Text style={styles.link}>Show Answer</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Question;
