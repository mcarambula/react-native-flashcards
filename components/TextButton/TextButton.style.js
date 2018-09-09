import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    btnFilled: {
        borderColor: appColors.purple,
        backgroundColor: appColors.purple,
        borderWidth: 2,
        borderRadius: 5
    },
    textFilled: {
        textAlign: 'center',
        color: 'white',
        padding: 55,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18
    },
    btn: {
        borderColor: appColors.purple,
        borderWidth: 2,
        borderRadius: 5
    },
    text: {
        textAlign: 'center',
        color: appColors.purple,
        padding: 55,
        paddingTop: 15,
        paddingBottom: 15,
        fontSize: 18
    }
});

export default styles;
