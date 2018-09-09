import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import Outlined from '../TextButton/Outlined';
import Filled from '../TextButton/Filled';
import DeckCard from './DeckCard';
import styles from './Deck.style';
import generalStyles from '../General/General.style';
import * as nav from '../../utils/navigation';

class Deck extends Component {
    showCardView = (deck) => {
        this.props.navigation.navigate(nav.ADD_CARD_VIEW_KEY, {'deckId': deck.title});
    }
    showQuizView = (deck) => {
        this.props.navigation.navigate(nav.QUIZ_VIEW_KEY, {'deckId': deck.title});
    }
    render() {
        const { deckId } = this.props.navigation.state.params;
        const deck = this.props.decks[deckId];
        return (
            <View style={[generalStyles.container, generalStyles.insideContainer]}>
                <DeckCard item={deck} />
                <View style={generalStyles.btnContainer}>
                    <Outlined onPress={() => this.showCardView(deck)}>Add Card</Outlined>
                    <Filled onPress={() => this.showQuizView(deck)}  style={{marginTop: 10}}>Start Quiz</Filled>
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
