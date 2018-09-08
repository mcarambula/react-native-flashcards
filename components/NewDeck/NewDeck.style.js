import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    question: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        margin: 40,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center'
    },
    questionText: {
        fontSize: 38,
        textAlign: 'center',
    },
    txtInput: {
        height: 50,
        borderColor: appColors.lightgray,
        borderRadius: 2,
        padding: 10,
        borderWidth: 1,
        marginTop: 40
    }
});

export default styles;
