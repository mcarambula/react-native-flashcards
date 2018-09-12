import React, { Component } from 'react';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import * as appColors from '../../utils/appColors';
import { addQuestion } from '../../actions';
import { createQuestion } from '../../utils/api';
import Filled from '../TextButton/Filled';
import generalStyles from '../General/General.style';
import styles from './AddCard.style';

class AddCard extends Component {
    state = {
        question: '',
        answer:'',
    }
    /*
        This functions submit the new question created by the questionNumber
        and adds it to the store and the local storage
    */
    submit = (deckId) => {
        const { question, answer } = this.state;
        const { navigation, addQuestion } = this.props;
        createQuestion({question, answer, deckId}).then(() => {
            addQuestion(deckId, {question, answer});
            navigation.goBack();
        });
    }
    render() {
        const { deckId } = this.props.navigation.state.params;
        const { question, answer } = this.state;
        return (
            <KeyboardAvoidingView
                behavior='padding'
                style={generalStyles.insideContainer}>
                    <Text style={styles.title}>{deckId}</Text>
                    <Text style={styles.instructions}>
                        Please fill the following
                        information about the question you want to add to this deck.
                    </Text>
                    <TextInput
                        style={generalStyles.txtInput}
                        editable={true}
                        maxLength={100}
                        placeholder="Input your question here"
                        onChangeText={(question) => this.setState({question})}
                    />
                    <TextInput
                        style={styles.answer}
                        editable={true}
                        maxLength={200}
                        multiline={true}
                        placeholder="Input your answer here"
                        onChangeText={(answer) => this.setState({answer})}
                    />
                    <Filled
                        style={{marginTop: 10}}
                        onPress={()=>this.submit(deckId)}
                        disabled={question === '' || answer === ''}>
                        Submit
                    </Filled>
                    <View style={{ height: 60 }} />
                </KeyboardAvoidingView>
        )
    }
}

const mapDispatchToProps = { addQuestion };

export default connect(null, mapDispatchToProps)(AddCard);
