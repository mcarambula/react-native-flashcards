import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    title: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center'
    },
    answer: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
        height: 80
    }
});

export default styles;
