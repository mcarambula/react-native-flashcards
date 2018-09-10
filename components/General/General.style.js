import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    app: {
        flex: 1
    },
    container: {
        flex: 1,
        padding: 20
    },
    btnContainer: {
        padding: 30
    },
    flexEnd: {
        justifyContent: 'flex-end'
    },
    insideContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4,
        margin: 10,
        justifyContent: 'center'
    }
});

export default styles;
