import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ListView,
} from 'react-native';

import {PullList} from 'react-native-pull';
import {homeList} from "./axios";

export default class extends Component {

    static navigationOptions = {
        title: '段子',
    };

    constructor(props) {
        super(props);
        this.dataSource = [];
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        // this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
        this.onPullRelease = this.onPullRelease.bind(this);
        // this.loadMore();
    }

    onPullRelease(resolve) {
        homeList().then(res=>{
            this.dataSource = [];
            this.dataSource = this.dataSource.concat(res);
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
            resolve();
        }).catch();
    }

    topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: -10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <ActivityIndicator size="small" color="tomato" />
                <Text ref={(c) => {this.txtPulling = c;}}>松开加载...</Text>
                <Text ref={(c) => {this.txtPullok = c;}}>松开加载...</Text>
                <Text ref={(c) => {this.txtPullrelease = c;}}>加载中...</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <PullList
                    style={{}}
                    onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
                    // renderHeader={this.renderHeader}
                    dataSource={this.state.list}
                    pageSize={5}
                    initialListSize={5}
                    renderRow={this.renderRow}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={60}
                    renderFooter={this.renderFooter}
                />
            </View>
        );
    }

    // renderHeader() {
    //     return (
    //         <View style={{height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center'}}>
    //             <Text style={{fontWeight: 'bold',fontSize:22,}}>段子手</Text>
    //         </View>
    //     );
    // }

    renderRow(item, sectionID, rowID, highlightRow) {
        return (
            <View style={styles.ViewLine}>
                <Text style={styles.TextLine}>{item.content}</Text>
            </View>
        );
    }

    renderFooter() {
        if(this.state.nomore) {
            return null;
        }
        return (
            <View style={{height: 40,alignItems:'center',justifyContent: 'center',}}>
                <ActivityIndicator color="tomato"/>
            </View>
        );
    }

    loadMore() {
        homeList().then(res=>{
            this.dataSource = this.dataSource.concat(res);
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
        })
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5FCFF',
    },
    TextLine : {
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        fontSize:18,
    },
    ViewLine : {
        borderBottomWidth:1,
        borderColor:'#eee',
    }
});