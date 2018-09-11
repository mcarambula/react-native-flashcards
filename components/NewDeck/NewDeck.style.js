import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    questionText: {
        fontSize: 38,
        textAlign: 'center',
    },
    error: {
        color: 'red'
    },
    txtInput: {
        height: 50,
        borderColor: appColors.gray,
        borderRadius: 2,
        padding: 10,
        borderWidth: 1,
        marginTop: 40
    }
});

export default styles;
