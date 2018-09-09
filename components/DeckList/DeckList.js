import React from 'react';
import { connect } from 'react-redux';
import { Text, FlatList, StyleSheet, View, TouchableOpacity } from 'react-native';
import DeckCard from '../Deck/DeckCard';
import styles from './DeckList.style';
import * as nav from '../../utils/navigation';

class DeckList extends React.Component  {
    onPressItem = (item) => {
        this.props.navigation.navigate(nav.DECK_VIEW_KEY, { deckId: item.title });
    }
    render() {
        const { decks } = this.props;
        return (
            <FlatList style={styles.deckListContainer}
                data = { Object.values(decks) }
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
        decks
    }
}

export default connect(mapStateToProps)(DeckList);
