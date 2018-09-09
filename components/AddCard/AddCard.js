import React from 'react';
import { connect } from 'react-redux';
import { Text, KeyboardAvoidingView, TextInput, TouchableOpacity, View } from 'react-native';
import * as appColors from '../../utils/appColors';
import Filled from '../TextButton/Filled';
import { addQuestion } from '../../actions';
import { createQuestion } from '../../utils/api';
import styles from './AddCard.style';

class AddCard extends React.Component {
    state = {
        question: '',
        answer:'',
    }
    submit = (deckId) => {
        const { question, answer } = this.state;
        const { navigation } = this.props;
        createQuestion({question, answer, deckId}).then(() => {
            this.props.addQuestion(deckId, {question, answer});
            navigation.goBack();
        });
    }
    render() {
        const { deckId } = this.props.navigation.state.params;
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <Text style={styles.title}>{deckId}</Text>
                    <TextInput
                        style={styles.question}
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
                        style={{marginTop: 10, backgroundColor: appColors.aqua, borderColor: appColors.aqua}}
                        onPress={()=>this.submit(deckId)}>
                        Submit
                    </Filled>
                    <View style={{ height: 60 }} />
                </KeyboardAvoidingView>
        )
    }
}

const mapDispatchToProps = { addQuestion };

export default connect(null, mapDispatchToProps)(AddCard);
