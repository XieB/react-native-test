import React from 'react';
import { Text, View,Image } from 'react-native';
import { TabNavigator,TabBarBottom  } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './compents/home';
import SettingsScreen from './compents/settings';
import PersonScreen from './compents/person';
import ExampleScreen from './compents/example';

export default TabNavigator(
    {
        Home: { screen: HomeScreen },
        Settings: { screen: SettingsScreen },
        My: {screen : PersonScreen},
        Example : {screen : ExampleScreen}
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }else if (routeName === 'My') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                }else if (routeName === 'Example') {
                    iconName = `ios-flask${focused ? '' : '-outline'}`;
                }


                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        // animationEnabled: false,
        swipeEnabled: false,
    }
);