import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    deckContainer: {
        flex: 1,
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
    btnContainer: {
        justifyContent: 'flex-end',
        padding: 30
    }
});

export default styles;
