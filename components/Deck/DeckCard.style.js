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
        color: appColors.primary
    },
    /*howManyContainer: {
        backgroundColor: appColors.secondary,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 15,
        padding: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5
    },*/
    howMany: {
        fontSize: 16,
        color: appColors.gray,
        margin: 5
    }
});

export default styles;
