import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    quizContainer: {
        flex: 1
    },
    questionNumber: {
        zIndex: 2,
        fontSize: 16
    },
    question: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    questionText: {
        fontSize: 50,
        textAlign: 'center',
    },
    answerText: {
        color: 'red',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 40
    }
});

export default styles;
