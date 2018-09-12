import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Outlined from '../TextButton/Outlined';
import Filled from '../TextButton/Filled';
import styles from './Quiz.style';
import generalStyles from '../General/General.style';
import * as appColors from '../../utils/appColors';

let ar = ['star', 'star-o', 'star-o'];

class Results extends Component  {
    constructor () {
        super();
        this.animatedValue = [];
        /* Creating animation for each star */
        ar.forEach((value, i) => {
            this.animatedValue[i] = new Animated.Value(0)
        });
    }
    componentDidMount () {
        this.animate();
    }
    animate () {
        const animations = ar.map((item, i) => {
            return Animated.timing(
                this.animatedValue[i],
                {
                    toValue: 1,
                    duration: 200
                }
            )
        })
        Animated.sequence(animations).start();
    }
    /*
        This function allows to show
        the appropriate stars given the score
    */
    getIcons = (sc) => {
        if (sc === 2) {
            ar = ['star', 'star', 'star'];
        }
        else if (sc === 1) {
            ar = ['star', 'star', 'star-o'];
        }
        return (ar.map((icon, i) => (
                <Animated.View key={i} style={{opacity: this.animatedValue[i]}}>
                    <FontAwesome name={icon} size={40} style={{margin: 5}} color={appColors.secondary} />
                </Animated.View>
                )))
    }
    renderScore = (score, howMany) => {
        return (
            <View>
                <Text style={styles.score}>Score {score} / {howMany}</Text>
            </View>
        )
    }
    render() {
        const {score, howMany,  goHome, resetQuiz} = this.props;
        const sc = (score / howMany *  100 >= 90) ? 2 : (score / howMany *  100 >= 50) ? 1 : 0 ;
        const comment = (sc === 2)
                            ? "Woooh! Excellent job!"
                            : ((sc === 1 )
                                ? "Keep it up! You are doing a good job!"
                                : "That wasn't so good. Keep trying!");
        return (
            <View style={{flex:1, padding: 20}}>
                <View style={[generalStyles.flex, generalStyles.centered]}>
                    {this.renderScore(score, howMany)}
                    <View
                        style={styles.icons}>
                        {this.getIcons(sc)}
                    </View>
                    <Text style={styles.answerText}>{comment}</Text>
                </View>
                <Outlined onPress={resetQuiz}>Reset</Outlined>
                <Filled onPress={goHome} style={{marginTop: 10}}>Go to home</Filled>
            </View>
        )
    }

}

export default Results;
