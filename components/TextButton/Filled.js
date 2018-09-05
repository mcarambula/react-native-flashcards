import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Filled ({ children, onPress, style = {} }) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
            <Text style={[styles.text]}>{children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        borderColor: 'black',
        backgroundColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        margin: 10
    },
    text: {
        textAlign: 'center',
        color: 'white',
        padding: 55,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18
    }
})
