import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: appColors.purple
    },
    howMany: {
        fontSize: 16,
        color: appColors.gray,
        margin: 5
    }
});

export default styles;
