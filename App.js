import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Deck from './components/Deck/Deck';
import Quiz from './components/Quiz/Quiz';
import FlashcardsStatusBar from './components/General/FlashcardsStatusBar';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <FlashcardsStatusBar backgroundColor='black' barStyle='light-content'/>
          <Deck />
      </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
      },
});
