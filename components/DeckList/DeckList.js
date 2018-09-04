import React from 'react';
import { Text, ScrollView, StyleSheet, View } from 'react-native';
import DeckCard from '../Deck/DeckCard';

const decks = [
    {
        title: 'udacicards',
        cards: 3
    },
    {
        title: 'new deck',
        cards: 0
    },
    {
        title: 'new deck 2',
        cards: 2
    },
]

export default function DeckList () {
    return (
        <ScrollView>
            {
                decks.map((deck, index) => (
                    <View key={index}>
                        <DeckCard
                            title={deck.title}
                            howMany={deck.cards}
                            cardStyle={styles.card}
                        />
                        <View style={{height: 1, backgroundColor: '#000'}} />
                    </View>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 40,
    }
})
