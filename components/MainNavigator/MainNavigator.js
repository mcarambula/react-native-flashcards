import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { AppLoading } from 'expo';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import Deck from '../Deck/Deck';
import AddCard from '../AddCard/AddCard';
import DeckList from '../DeckList/DeckList';
import NewDeck from '../NewDeck/NewDeck';
import Quiz from '../Quiz/Quiz';
import { handleInitialData } from '../../actions';
import * as nav from '../../utils/navigation';
import * as appColors from '../../utils/appColors';

const AndroidTab = createMaterialTopTabNavigator({
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
        activeTintColor: appColors.aqua,
        inactiveTintColor: appColors.white,
        style: {
            backgroundColor: appColors.purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        },
        indicatorStyle: {
            backgroundColor: appColors.aqua,
            height: 5,
        },
        labelStyle : {
            fontSize: 18
        }
    }
})


const IOSTab = createBottomTabNavigator({
        Decks: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name="layers" size={30} color={tintColor} />
                ),
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({ tintColor }) => (
                  <Ionicons name="ios-add-outline" size={35} color={tintColor} />
                ),
            },
        },
    },
    {
    tabBarOptions: {
        inactiveTintColor: appColors.white,
        activeTintColor: appColors.aqua,
        style: {
            height: 60,
            backgroundColor: appColors.purple,
            shadowColor: 'rgba(0, 0, 0, 0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1,
        },
        labelStyle : {
            fontSize: 20
        }
    }
});

const Navigator = createStackNavigator(
    {
        Home: {
            screen: (Platform.OS === 'ios') ? IOSTab : AndroidTab,
        },
        Deck: {
            screen: Deck,
            title: "Deck",
            navigationOptions:{
                headerTintColor: 'white',
                headerStyle:{
                    backgroundColor: 'black'
                },
                headerBackTitle: null,
                title: "Deck Details"
            }
        },
        AddCard: {
            screen: AddCard
        },
        Quiz: {
            screen: Quiz
        }
    },
    {
        navigationOptions: {
            header: null
        }
    }
);

class MainNavigator extends Component {
    componentDidMount() {
        /* Retreiving initial information for the application */
        this.props.handleInitialData().then(() => this.setState({ready: true}));
    }
    state = {
        ready: false
    }
    render() {
        if (!this.state.ready) {
            return <AppLoading />;
        }
        return <Navigator />
    }
}


const mapDispatchToProps = { handleInitialData };

export default connect(null, mapDispatchToProps)(MainNavigator);
