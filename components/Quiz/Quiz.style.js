import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    quiz: {
        flex: 1,
        backgroundColor: appColors.white,
        padding: 20
    },
    question: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    questionNumber: {
        zIndex: 2,
        fontSize: 16
    },
    questionText: {
        fontSize: 35,
        textAlign: 'center'
    },
    link: {
        color: appColors.secondary,
        fontSize: 14,
        textAlign: 'center',
    },
    answerText: {
        fontSize: 20,
        textAlign: 'center',
    },
    cardContainer: {
        flex: 3
    },
    card: {
        flex: 1,
        backgroundColor: appColors.lightGray,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        justifyContent: 'center',
        padding: 20,
        margin: 10,
    },
    backCard: {
        backgroundColor: appColors.backCard
    },
    bullet: {
        width: 10,
        height: 10,
        margin: 4,
        backgroundColor: appColors.gray,
        borderRadius: 5
    },
    score: {
        fontSize: 30,
        color: appColors.primary
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        marginTop: 30
    }
});

export default styles;
