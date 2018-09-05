import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AndroidTab from './components/Tab/AndroidTab';
import IOSTab from './components/Tab/iOSTab';
import FlashcardsStatusBar from './components/General/FlashcardsStatusBar';
import styles from './components/General/General.style';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.app}>
          <FlashcardsStatusBar backgroundColor='black' barStyle='light-content'/>
          { Platform.OS === 'ios' ? <IOSTab /> : <AndroidTab /> }
      </View>
    );
  }
}
