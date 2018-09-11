import React from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Outlined from '../TextButton/Outlined';
import Filled from '../TextButton/Filled';
import styles from './Quiz.style';

export default function Results({score, howMany,  goHome, resetQuiz}) {
    const sc = (score / howMany *  100 >= 90) ? 2 : (score / howMany *  100 >= 50) ? 1 : 0 ;
    const comment = (sc === 2)
                        ? "Woooh! Excellent job! 🙌🏻"
                        : ((sc === 1 )
                            ? "Keep it up! You are doing a good job! 😊"
                            : "That wasn't so good. Keep trying! 💪🏻");

    const getIcons = (sc) => {
        let ar = [];
        if (Platform.OS === 'ios') {
            if (sc === 2) {
                ar = ['ios-star', 'ios-star', 'ios-star'];
            }
            else if (sc === 1) {
                ar = ['ios-star', 'ios-star', 'ios-star-outline'];
            }
            else if (sc === 0) {
                ar = ['ios-star', 'ios-star-outline', 'ios-star-outline'];
            }
        }

        return ar.map((icon, i) => (
            <Ionicons key={i} name={icon} size={30} style={{margin: 5}} />
        ));
    }
    return (
        <View style={{flex:1, padding: 20}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.answerText}>Score {score} / {howMany}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30, marginTop: 30}}>{ getIcons(sc) }</View>
                <Text style={styles.answerText}>{comment}</Text>
            </View>
            <Outlined onPress={resetQuiz}>Reset</Outlined>
            <Filled onPress={goHome} style={{marginTop: 10}}>Go to home</Filled>
        </View>
    )
}
