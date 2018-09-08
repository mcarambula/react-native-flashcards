import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './TextButton.style';

export default function TextButton ({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={[styles.text, style]}>{children}</Text>
        </TouchableOpacity>
    )
}
