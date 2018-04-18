import React from 'react';
import { Text, View,Image } from 'react-native';


export default class SettingsScreen extends React.Component {
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