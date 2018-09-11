import { StyleSheet } from 'react-native';
import * as appColors from '../../utils/appColors';

const styles = StyleSheet.create({
    app: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 20
    },
    btnContainer: {
        padding: 10,
        paddingTop: 30
    },
    flexEnd: {
        justifyContent: 'flex-end'
    },
    insideContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: appColors.white,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        margin: 10,
        justifyContent: 'center'
    },
    txtInput: {
        height: 50,
        borderColor: appColors.mediumGray,
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        marginTop: 40
    }
});

export default styles;
