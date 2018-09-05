import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';
import DeckList from '../DeckList/DeckList';
import NewDeck from '../NewDeck/NewDeck';

const Tabs = createMaterialTopTabNavigator({
        Decks: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Decks',
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
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


export default function AndroidTab() {
    return (
        <Tabs />
    )
}
