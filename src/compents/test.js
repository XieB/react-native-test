import React from 'react';
import { Text, View,Image } from 'react-native';
import { TabNavigator,TabBarBottom  } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';



class HomeScreen extends React.Component {
    static navigationOptions = {
        title: '首页',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>这是首页!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: '设置',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>这是设置!</Text>
            </View>
        );
    }
}

class myHome extends React.Component {
    static navigationOptions = {
        title: '我的',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>我的!</Text>
            </View>
        );
    }
}

export default TabNavigator(
    {
        Home: { screen: HomeScreen },
        Settings: { screen: SettingsScreen },
        My: {screen : myHome},
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