import React from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './TextButton.style';

export default function Filled ({ children, onPress, disabled = false, style = {} }) {
    /*
        Checking if the button needs to be disabled (empty for).
        In case it should be disabled, return a TouchableWithoutFeedback component.
        In case it shouldn't return a TouchableOpacity component.
    */
    if (!disabled) {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.btnFilled, style]}>
                <Text style={[styles.textFilled]}>{children}</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableWithoutFeedback disabled={disabled}>
                <View style={[styles.btnFilled, styles.btnDisabled, style]}>
                    <Text style={[styles.textFilled]}>{children}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
