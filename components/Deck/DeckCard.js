import React from 'react';
import { Text, View } from 'react-native';
import styles from './DeckCard.style';

/* This component renders the deck card (used on the listing and on the detail )*/
export default function DeckCard ({ item }) {
    const { title, cardStyle } = item;
    const howMany = (item.questions) ? item.questions.length : 0;
    return (
        <View style={[styles.card, cardStyle]}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.howManyContainer}>
                <Text style={styles.howMany}>{howMany} cards </Text>
            </View>
        </View>
    )
}
