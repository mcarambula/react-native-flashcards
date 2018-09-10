import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

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
        fontSize: 35,
        textAlign: 'center'
    },
    link: {
        color: appColors.gray,
        fontSize: 14,
        marginTop: 20,
        marginBottom: 40,
        textAlign: 'center'
    },
    answerText: {
        fontSize: 20,
        textAlign: 'center',
    },
    card: {
        flex: 1,
        backgroundColor: appColors.lightgray,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        justifyContent: 'center',
        padding: 10,
        marginTop: 10
    },
    bullet: {
        width: 14,
        height: 14,
        margin: 4,
        backgroundColor: appColors.gray,
        borderRadius: 7
    }
});

export default styles;
