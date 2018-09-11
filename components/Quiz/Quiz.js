import React , { Component } from 'react';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import CardFlip from 'react-native-card-flip';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import Filled from '../TextButton/Filled';
import Outlined from '../TextButton/Outlined';
import Results from './Results';
import styles from './Quiz.style';
import generalStyles from '../General/General.style';
import * as nav from '../../utils/navigation';
import * as appColors from '../../utils/appColors';
import { setLocalNotification, clearLocalNotification } from '../../utils/helpers';

class Quiz extends Component {
    state = {
        currentQuestion: 0,
        score: 0,
        end: false,
        opacity: new Animated.Value(0)
    }
    componentDidMount() {
        const { opacity } = this.state;
        Animated.timing(opacity, { duration: 1000, toValue: 1}).start();
    }
    componentDidUpdate(prevProps, prevState) {
        const { opacity, currentQuestion } = this.state;
        if (prevState.currentQuestion !== currentQuestion) {
            Animated.timing(opacity, { duration: 1000, toValue: 1}).start();
        }
    }
    next = ({currentQuestion, questions, correct = false}) => {
        const { opacity } = this.state;
        // if there are more questions to answer.
        if (currentQuestion + 1 < questions.length) {
            //Checking is the previous card was flipped to flipped over
            if (this.isFlipped) {
                this.flip(false);
            }
            return this.setState(() => ({
                opacity: new Animated.Value(0)
            }), () => {
                this.setState(prevState => ({
                    currentQuestion: prevState.currentQuestion + 1,
                    score: (correct) ? prevState.score + 1 : prevState.score
                }));
            })
        }
        // If the end of the quiz has been reached.
        this.setState(prevState => (
            {
                end: true,
                score: (correct) ? prevState.score + 1 : prevState.score
            }
        ));
        clearLocalNotification()
            .then(setLocalNotification);
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
                                            width: 12,
                                            height: 12,
                                            borderRadius: 6
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
    flip = (back) => {
        this.isFlipped = back;
        this.card.flip();
    }
    renderQuestions = () => {
        const { currentQuestion, end, opacity } = this.state;
        const { deck } = this.props;
        const howMany = deck.questions.length;
        const item = deck.questions[currentQuestion];
        return (
            <View style={{flex:1}}>
                <CardFlip
                    style={styles.cardContainer}
                    ref={(card) => this.card = card} >
                    <View style={styles.card} >
                        <View style={styles.question}>
                            <Text style={styles.questionText}>{item.question}</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.flip(true)}
                            style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={styles.link}>Show Answer</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.card, styles.backCard]} >
                        <View style={styles.question}>
                            <Text style={styles.answerText}>{item.answer}</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.flip(false)}
                            style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={styles.link}>Show Question</Text>
                        </TouchableOpacity>
                    </View>
                 </CardFlip>
                <View style={[generalStyles.btnContainer, {flex: 1}]}>
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
        const { currentQuestion, end, score } = this.state;
        const { deck } = this.props;
        const howMany = deck.questions.length;
        const item = deck.questions[currentQuestion];
        return (
            <View style={{flex: 1, backgroundColor: 'white', padding: 10}}>
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
