import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import Filled from '../TextButton/Filled';
import { addDeck } from '../../actions';
import { createDeck } from '../../utils/api';
import styles from './NewDeck.style';
import * as appColors from '../../utils/appColors';
import generalStyles from '../General/General.style';

class NewDeck extends React.Component {
    state = {
        title: ''
    }
    submit = () => {
        const { title } = this.state;
        const { addDeck, navigation } = this.props;
        createDeck(title).then((deck) => {
            addDeck(deck);
            navigation.navigate('Deck', { deckId: title});
        });
    }
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={[generalStyles.container, styles.question]}>
                <Text style={styles.questionText}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.txtInput}
                    onChangeText={(title) => this.setState({title})}
                    placeholder="Deck Title"
                    value={this.state.text}
                />
                <Filled
                    style={{marginTop: 10, backgroundColor: appColors.aqua, borderColor: appColors.aqua}}
                    onPress={this.submit}>
                    Submit
                </Filled>
                <View style={{ height: 60 }} />
            </KeyboardAvoidingView>
        )
    }
}

const mapDispatchToProps = { addDeck };

export default connect(null, mapDispatchToProps)(NewDeck);
