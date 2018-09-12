import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
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

/* Tabs for android devices */
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
            activeTintColor: appColors.seconday,
            style: {
                backgroundColor: appColors.primary,
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            },
            indicatorStyle: {
                backgroundColor: appColors.secondary,
                height: 5,
            },
            labelStyle : {
                fontSize: 18
            }
        }
    }
);


/* Tabs for iOS devices */
const IOSTab = createBottomTabNavigator({
        Decks: {
            screen: DeckList,
            navigationOptions: {
                tabBarLabel: 'Decks',
                tabBarIcon: ({ tintColor }) => (
                    <Entypo name='layers' size={30} color={tintColor} />
                ),
            },
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: 'New Deck',
                tabBarIcon: ({ tintColor }) => (
                  <Ionicons name='ios-add-outline' size={35} color={tintColor} />
                ),
            },
        },
    },
    {
    tabBarOptions: {
        inactiveTintColor: appColors.gray,
        activeTintColor: appColors.primary,
        style: {
            height: 60,
            backgroundColor: appColors.white,
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
            navigationOptions: {
                header: null
            },
        },
        Deck: {
            screen: Deck,
            title: 'Deck',
            navigationOptions:{
                headerTintColor: appColors.white,
                headerStyle:{
                    backgroundColor: appColors.headerBackground
                },
                headerBackTitle: null,
                title: 'Deck Details'
            }
        },
        AddCard: {
            screen: AddCard,
            navigationOptions:{
                headerTintColor: appColors.white,
                headerStyle:{
                    backgroundColor: appColors.headerBackground
                },
                headerBackTitle: null,
                title: 'Add a new card'
            }
        },
        Quiz: {
            screen: Quiz,
            title: 'Quiz',
            navigationOptions:{
                headerTintColor: 'white',
                headerStyle:{
                    backgroundColor: appColors.headerBackground
                },
                headerBackTitle: null,
                title: 'Quiz'
            }
        }
    }
);

class MainNavigator extends Component {
    state = {
        ready: false
    }
    componentDidMount() {
        /* Retreiving initial information for the application */
        this.props.handleInitialData().then(() => this.setState({ready: true}));
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
