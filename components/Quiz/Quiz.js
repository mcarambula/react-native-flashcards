import React , { Component } from 'react';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import CardFlip from 'react-native-card-flip';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import Filled from '../TextButton/Filled';
import Outlined from '../TextButton/Outlined';
import Results from './Results';
import Question from './Question';
import Answer from './Answer';
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
    /* Once the component is mounted start initial animation */
    componentDidMount() {
        const { opacity } = this.state;
        this.isFlipped = false;
        Animated.timing(opacity, { duration: 1000, toValue: 1}).start();
    }
    /*
        This functions allows to:
        - Change the opacity animation duration based
        in if the card is flipped or not (to give more time to flip it over).
        - Start the opacity animation again

    */
    componentDidUpdate(prevProps, prevState) {
        const { opacity, currentQuestion } = this.state;
        if (prevState.currentQuestion !== currentQuestion) {
            const duration = (this.isFlipped) ? 4000 : 1000;
            Animated.timing(opacity, { duration, toValue: 1}).start();
        }
    }
    /*
        This functions goes to the next question (if it exists )
        If it doesn't then set the result view with the score
    */
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
    /* This functions allows to create as many bullets as questions has the deck */
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
    /* This reset the quiz */
    resetQuiz = () => {
        this.setState({
            currentQuestion: 0,
            score: 0,
            end: false
        });
    }
    /* This function allows to go to home reseting the stack */
    goHome = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: nav.HOME_VIEW_KEY })],
        });
        this.props.navigation.dispatch(resetAction);
    }
    /*
        This functions allows to keep track if the previous card was flipped,
        so when the user goes to the next is flipped over again.
    */
    flip = (back) => {
        this.isFlipped = back;
        this.card.flip();
    }
    /*
        This functions allows to render the question card
        and the buttons to answer it
    */
    renderQuestions = () => {
        const { currentQuestion, end, opacity } = this.state;
        const { deck } = this.props;
        const howMany = deck.questions.length;
        const item = deck.questions[currentQuestion];
        return (
            <View style={generalStyles.flex}>
                <Animated.View style={{ flex: 3, opacity }}>
                    <CardFlip
                        style={styles.cardContainer}
                        duration={300}
                        ref={(card) => this.card = card} >
                            <Question item={item} onPress={() => this.flip(true)} />
                            <Answer item={item} onPress={() => this.flip(false)}  />
                    </CardFlip>
                </Animated.View>
                <View style={[generalStyles.btnContainer, generalStyles.flex]}>
                    <Outlined
                        onPress={() => this.next({currentQuestion, questions: deck.questions, correct: true})}> Correct </Outlined>
                    <Filled
                        onPress={() => this.next({currentQuestion, questions: deck.questions})}
                        style={{marginTop: 10}}> Incorrect </Filled>
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
            <View style={styles.quiz}>
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
