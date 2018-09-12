import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    title: {
        color: appColors.primary,
        fontSize: 24,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    answer: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: appColors.gray,
        height: 80
    },
    instructions: {
        textAlign: 'center',
        color: appColors.gray,
        marginTop: 10
    }
});

export default styles;
