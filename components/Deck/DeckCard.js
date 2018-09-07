import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styles from './DeckCard.style';

export default function DeckCard ({ item }) {
    const { title, howMany, cardStyle } = item;
    return (
        <View style={[styles.card, cardStyle]}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.howMany}>{howMany} cards </Text>
        </View>
    )
}
