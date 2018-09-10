import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    questionText: {
        fontSize: 38,
        textAlign: 'center',
    },
    /*topCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: appColors.secondary
    },*/
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
