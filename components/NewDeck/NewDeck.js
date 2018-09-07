import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Filled from '../TextButton/Filled';
import styles from './NewDeck.style';
import generalStyles from '../General/General.style';

class NewDeck extends React.Component {
    state = {
        text: ''
    }
    render() {
        return (
            <View style={[generalStyles.container, {justifyContent: 'center'}]}>
                <Text style={styles.questionText}>What is the title of your new deck?</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({text})}
                    placeholder="Deck Title"
                    value={this.state.text}
                  />
                  <Filled>
                      Submit
                  </Filled>
            </View>
        )
    }
}

export default NewDeck;
