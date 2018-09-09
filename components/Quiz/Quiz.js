import React , { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Filled from '../TextButton/Filled';
import Answer from './Answer';
import Question from './Question';
import styles from './Quiz.style';
import generalStyles from '../General/General.style';

class Quiz extends Component {
    state = {
        showQuestion: true,
        currentQuestion: 1
    }
    questionNumber = (currentQuestion, howMany) => {
        return <Text style={styles.questionNumber}>{currentQuestion} / {howMany}</Text>;
    }
    render() {
        const { showQuestion, currentQuestion } = this.state;
        const { deck } = this.props;
        const howMany = deck.questions.length;
        const item = deck.questions[currentQuestion - 1];
        return (
            <View style={[generalStyles.container, generalStyles.insideContainer ]}>
                { this.questionNumber(currentQuestion, howMany) }
                    <View style={styles.card}>
                        {
                            (showQuestion === true)?
                                <Question
                                    item={item}
                                    onPress={()=> this.setState({showQuestion: false})}/>
                                :
                                <Answer
                                    item={item}
                                    onPress={()=> this.setState({showQuestion: true})}/>
                        }
                    </View>
                    <View style={generalStyles.btnContainer}>
                        <Filled style={{backgroundColor: 'green', borderWidth: 0}}> Correct </Filled>
                        <Filled style={{backgroundColor: 'red', borderWidth: 0}}> Incorrect </Filled>
                    </View>
            </View>
        )
    }
}

function mapStateToProps({ decks }, { navigation }) {
    const { deckId } = navigation.state.params;
    return {
        deck: decks[deckId]
    }
}

export default connect(mapStateToProps)(Quiz);
