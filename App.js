import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import DeckList from './components/DeckList/DeckList';
import Quiz from './components/Quiz/Quiz';
import FlashcardsStatusBar from './components/General/FlashcardsStatusBar';
import styles from './components/General/General.style';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
          <FlashcardsStatusBar backgroundColor='black' barStyle='light-content'/>
          <Quiz />
      </View>
    );
  }
}
