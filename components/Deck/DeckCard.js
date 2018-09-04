import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function DeckCard ({title, howMany, cardStyle}) {
    return (
        <View style={[styles.titleContainer, cardStyle]}>
            <Text style={{fontSize: 35}}>{title}</Text>
            <Text style={{fontSize: 18, color: 'gray', margin: 10}}>{howMany} cards </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 2,
        justifyContent:'center',
        alignItems: 'center'
    }
})
