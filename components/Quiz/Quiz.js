import React , { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Filled from '../TextButton/Filled';
import Answer from './Answer';
import Question from './Question';
import styles from './Quiz.style';
import generalStyles from '../General/General.style';

class Quiz extends Component {
    questionNumber = () => {
        return <Text style={styles.questionNumber}>2 / 2</Text>;
    }
    render() {
        return (
            <View style={generalStyles.container}>
                { this.questionNumber() }
                <View style={styles.quizContainer}>
                    <Question/>
                    <View style={generalStyles.btnContainer}>
                        <Filled style={{backgroundColor: 'green', borderWidth: 0}}> Correct </Filled>
                        <Filled style={{backgroundColor: 'red', borderWidth: 0}}> Incorrect </Filled>
                    </View>
                </View>
            </View>
        )
    }
}

export default Quiz;
