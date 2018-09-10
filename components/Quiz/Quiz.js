import React , { Component } from 'react';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import { Text, View, TouchableOpacity } from 'react-native';
import Filled from '../TextButton/Filled';
import Outlined from '../TextButton/Outlined';
import Results from './Results';
import styles from './Quiz.style';
import generalStyles from '../General/General.style';
import * as nav from '../../utils/navigation';
import * as appColors from '../../utils/appColors';

class Quiz extends Component {
    state = {
        showQuestion: true,
        currentQuestion: 0,
        score: 0,
        end: false
    }
    next = ({currentQuestion, questions, correct = false}) => {
        if (currentQuestion + 1 < questions.length) {
            return this.setState(prevState => ({
                currentQuestion: prevState.currentQuestion + 1,
                showQuestion: true,
                score: (correct) ? prevState.score + 1 : prevState.score
            }));
        }
        return this.setState(prevState => ({end: true, score: (correct) ? prevState.score + 1 : prevState.score}));
    }
    questionNumber = (currentQuestion, howMany) => {
        if (howMany === 1) {
            return null;
        }
        return (
            <View >
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    {
                        [...Array(howMany)].map((x, i) => {
                            const active = (currentQuestion === i) ?
                                        {
                                            backgroundColor: appColors.secondary,
                                            width: 16,
                                            height: 16,
                                            borderRadius: 8
                                        }
                                    :
                                        {};
                            return (
                                <View key={i} style={[styles.bullet, active]}  />
                            )
                        })
                    }
                </View>
            </View>
        );
    }
    resetQuiz = () => {
        this.setState({
            showQuestion: true,
            currentQuestion: 0,
            score: 0,
            end: false
        });
    }
    goHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: nav.HOME_VIEW_KEY })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    renderQuestions = () => {
        const { showQuestion, currentQuestion, end } = this.state;
        const { deck } = this.props;
        const howMany = deck.questions.length;
        const item = deck.questions[currentQuestion];
        return (
            <View style={{flex:1}}>
                <View style={[styles.card, showQuestion ? {} : {backgroundColor: appColors.backCard} ]}>
                    {
                        (showQuestion)?
                            <Text style={styles.questionText}>{item.question}</Text>
                            :
                            <Text style={styles.answerText}>{item.answer}</Text>
                    }
                </View>
                <TouchableOpacity onPress={() => this.setState({showQuestion: !this.state.showQuestion})}>
                    <Text style={styles.link}>Show {showQuestion ? 'Answer' : 'Question'}</Text>
                </TouchableOpacity>
                <View style={generalStyles.btnContainer}>
                    <Outlined
                        onPress={() => this.next({currentQuestion, questions: deck.questions, correct: true})}> Correct </Outlined>
                    <Filled
                        onPress={() => this.next({currentQuestion, questions: deck.questions})}
                        style={{marginTop: 10}}
                        > Incorrect </Filled>
                </View>
            </View>
        )
    }
    render() {
        const { showQuestion, currentQuestion, end, score } = this.state;
        const { deck } = this.props;
        const howMany = deck.questions.length;
        const item = deck.questions[currentQuestion];
        return (
            <View style={[generalStyles.container, generalStyles.insideContainer ]}>
                { !end && this.questionNumber(currentQuestion, howMany) }
                { !end ?
                    this.renderQuestions()
                    :
                    <Results
                        goHome={this.goHome}
                        resetQuiz={this.resetQuiz}
                        howMany={howMany}
                        score={score} />
                }
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
