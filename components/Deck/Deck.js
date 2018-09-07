import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import Outlined from '../TextButton/Outlined';
import Filled from '../TextButton/Filled';
import DeckCard from './DeckCard';
import styles from './Deck.style';
import generalStyles from '../General/General.style';

class Deck extends React.Component {
    render() {
        const { deckId } = this.props.navigation.state.params;
        const deck = this.props.decks[deckId];
        return (
            <View style={generalStyles.container}>
                <DeckCard item={deck} />
                <View style={generalStyles.btnContainer}>
                    <Outlined>Add Card</Outlined>
                    <Filled>Start Quiz</Filled>
                </View>
            </View>
        )
    }
}

function mapStateToProps({ decks }) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(Deck);
