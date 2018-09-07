import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import FlashcardsStatusBar from './components/General/FlashcardsStatusBar';
import styles from './components/General/General.style';
import MainNavigator from './components/MainNavigator/MainNavigator';
import reducer from './reducers';
import middleware from './middleware';

const store = createStore(reducer, middleware);

export default class App extends React.Component {
    render() {
        return (
          <Provider store={store}>
              <View style={styles.app}>
                  <FlashcardsStatusBar backgroundColor='black' barStyle='light-content'/>
                  <MainNavigator style={{flex: 1}}/>
              </View>
          </Provider>
        );
    }
}
