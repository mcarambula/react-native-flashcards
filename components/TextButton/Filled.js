import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './TextButton.style';

export default function Filled ({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btnFilled, style]}>
            <Text style={[styles.textFilled]}>{children}</Text>
        </TouchableOpacity>
    )
}
