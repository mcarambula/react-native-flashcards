import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    questionNumber: {
        zIndex: 2,
        fontSize: 16
    },
    question: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    questionText: {
        fontSize: 50,
        textAlign: 'center',
    },
    link: {
        color: 'red',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 40
    },
    answerText: {
        fontSize: 20,
        textAlign: 'center'
    },
    card: {
        flex: 1,
        backgroundColor: 'gray',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        justifyContent: 'center'
    }
});

export default styles;
