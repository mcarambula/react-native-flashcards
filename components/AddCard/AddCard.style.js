import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
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
    title: {
        color: 'black',
        fontSize: 24,
        textAlign: 'center'
    },
    button: {
        padding: 10,
        height: 60,
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: 'red'
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center'
    },
    question: {
        marginTop: 10,
        marginBottom: 10,
        padding: 10,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5
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
