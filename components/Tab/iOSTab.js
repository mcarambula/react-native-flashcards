import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';
import DeckList from '../DeckList/DeckList';
import NewDeck from '../NewDeck/NewDeck';

const Tabs = createBottomTabNavigator({
        Decks: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-browsers-outline" size={30} color={tintColor} />
                ),
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({ tintColor }) => (
                  <Ionicons name="ios-create-outline" size={30} color={tintColor} />
                ),
            },
        },
    },
    {
    tabBarOptions: {
        activeTintColor: 'purple',
        style: {
            height: 50,
            backgroundColor: 'white',
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})


export default function IOSTab() {
    return (
        <Tabs />
    )
}
