import React from 'react';
import { Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styles from './TextButton.style';

export default function Outlined ({ children, onPress, disabled = false, style = {} }) {
    /*
        Checking if the button needs to be disabled (empty for).
        In case it should be disabled, return a TouchableWithoutFeedback component.
        In case it shouldn't return a TouchableOpacity component.
    */
    if (!disabled) {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.btn, style]}>
                <Text style={[styles.text]}>{children}</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableWithoutFeedback disabled={disabled}>
                <View style={[styles.btn, styles.btnDisabled, style]}>
                    <Text style={[styles.text]}>{children}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
