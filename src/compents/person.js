import React from 'react';
import { Text, View,Image } from 'react-native';

export default class myHome extends React.Component {
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