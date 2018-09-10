import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import FlashcardsStatusBar from './components/General/FlashcardsStatusBar';
import styles from './components/General/General.style';
import MainNavigator from './components/MainNavigator/MainNavigator';
import reducer from './reducers';
import middleware from './middleware';
import * as appColors from './utils/appColors';

const store = createStore(reducer, middleware);

export default class App extends Component {
    render() {
        return (
          <Provider store={store}>
              <View style={styles.app}>
                  <FlashcardsStatusBar backgroundColor={appColors.primary_dark} barStyle='light-content'/>
                  <MainNavigator style={{flex: 1}}/>
              </View>
          </Provider>
        );
    }
}
