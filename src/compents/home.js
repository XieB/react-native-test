import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';

import {homeList} from "./axios";

export default class FlatListBasics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [

            ],
        };
        this.getRemote = this.getRemote.bind(this);
    }

    static navigationOptions = {
        title: '首页',
    };

    getRemote(){
        homeList().then(res=>{
            this.setState({list:res});
        }).catch();
    }

    componentWillMount(){
        homeList().then(res=>{
            this.setState({list:res});
        }).catch();
    }


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.getRemote}>
                    <Text style={styles.center}>刷新</Text>
                </TouchableOpacity>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <Text style={styles.item}>{item.content}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        // height: 44,
        borderBottomWidth: 1,
        borderBottomColor : '#ddd',
        borderStyle : 'dashed',
    },
    center : {
        textAlign:'center',
        backgroundColor: 'dodgerblue',
        lineHeight : 44,
        fontSize:20,
        color : '#fff',
    }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);