import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        padding: 40,
        backgroundColor: 'white',
        borderRadius: 5,
        margin: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 4
    },
    deckListContainer: {
        padding: 10
    }
});

export default styles;
