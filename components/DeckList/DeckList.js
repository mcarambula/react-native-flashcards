import React from 'react';
import { connect } from 'react-redux';
import { Text, FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import DeckCard from '../Deck/DeckCard';
import styles from './DeckList.style';

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
    {
        title: 'new deck 3',
        cards: 2
    },
    {
        title: 'new deck 4',
        cards: 2
    },
    {
        title: 'new deck 5',
        cards: 2
    }
];

class DeckList extends React.Component  {
    onPressItem = (item) => {
        this.props.navigation.navigate('Deck');
    }
    render() {
        const { decksa } = this.props.decks;
        console.log('-------');
        console.log(this.props);
        return (
            <FlatList style={styles.deckListContainer}
                data = { decks }
                keyExtractor={ item => item.title }
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity style={styles.card} onPress={() => this.onPressItem(item)}>
                            <DeckCard
                                item={item}
                                fontSize={24} />
                        </TouchableOpacity>
                    )
                }}
            />
        )
    }
}

function mapStateToProps({ decks }) {
    return {
        decks: decks
    }
}

export default connect(mapStateToProps)(DeckList);
