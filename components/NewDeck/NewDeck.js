import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import Filled from '../TextButton/Filled';
import { addDeck } from '../../actions';
import { createDeck } from '../../utils/api';
import styles from './NewDeck.style';
import * as appColors from '../../utils/appColors';
import generalStyles from '../General/General.style';
import * as nav from '../../utils/navigation';

class NewDeck extends Component {
    state = {
        title: '',
        error: false
    }
    /*
        After a user submits the form, the deck object is createDeck
        and add it to the store and the localStorage
    */
    submit = () => {
        const { title } = this.state;
        const { addDeck, navigation } = this.props;
        createDeck(title).then((deck) => {
            addDeck(deck);
            navigation.navigate(nav.DECK_VIEW_KEY, { deckId: title});
        }).catch((error)=> this.setState({error}));
    }
    /*
        This function allows to show an error message in case the user
        tries to add a deck with a title that already exists
    */
    showError() {
        return (
            <Text style={styles.error}>Ups, that deck already exists!</Text>
        );
    }
    render() {
        const { title, error } = this.state;
        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={[generalStyles.container, generalStyles.insideContainer]}>
                <Text style={styles.questionText}>What is the title of your new deck?</Text>
                <TextInput
                    style={generalStyles.txtInput}
                    onChangeText={(title) => this.setState({title})}
                    placeholder="Deck Title"
                    value={this.state.text}
                />
                { error && this.showError() }
                <Filled
                    style={{marginTop: 10}}
                    onPress={this.submit}
                    disabled={title === ''} >
                    Submit
                </Filled>
                <View style={{ height: 60 }} />
            </KeyboardAvoidingView>
        )
    }
}

const mapDispatchToProps = { addDeck };

export default connect(null, mapDispatchToProps)(NewDeck);
