import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';

import HeaderPanel from './HeaderPanel';
import ItemBonus from './ItemBonus';

export default class BonusWithList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '- ƯU ĐÃI THEO DANH MỤC -',
            br1: require('../../source/images/pic1.jpg'),
            txt1: "food",
            br2: require('../../source/images/pic2.jpeg'),
            txt2: "coffee"
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <HeaderPanel title={this.state.title}/>
                <ScrollView horizontal={true}>
                    <ItemBonus
                        br={this.state.br1}
                        txt={this
                        .state
                        .txt1
                        .toUpperCase()}/>
                    <ItemBonus
                        br={this.state.br2}
                        txt={this
                        .state
                        .txt2
                        .toUpperCase()}/>
                    <ItemBonus
                        br={this.state.br1}
                        txt={this
                        .state
                        .txt1
                        .toUpperCase()}/>
                    <ItemBonus
                        br={this.state.br2}
                        txt={this
                        .state
                        .txt2
                        .toUpperCase()}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});