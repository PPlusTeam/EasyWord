import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
    Text,
    ScrollView
} from 'react-native';

import HeaderPanel from './HeaderPanel';
import ItemGift from './ItemGift';

export default class HotGift extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "- PHẦN THƯỞNG HẤP DẪN -",

            br1: require('../../source/images/gift1.jpg'),
            txt1: "Voucher 20% Pizza Hut",
            txt2: "5.000 EP",

            br2: require('../../source/images/gift2.jpg'),
            txt3: "Voucher 20% Pizza Hut",
            txt4: "50.000 EP",
            txt4: "40.000 EP",
            txt4: "60.000 EP",
            txt4: "20.000 EP"
        };
    }
    render() {
        return (
            <View>
                <HeaderPanel title={this.state.title}/>
                <ScrollView horizontal={true}>
                    <ItemGift br={this.state.br1} txt1={this.state.txt1} txt2={this.state.txt2}/>
                    <ItemGift br={this.state.br2} txt1={this.state.txt1} txt2={this.state.txt4}/>

                    <ItemGift br={this.state.br1} txt1={this.state.txt1} txt2={this.state.txt2}/>
                    <ItemGift br={this.state.br2} txt1={this.state.txt1} txt2={this.state.txt4}/>

                    <ItemGift br={this.state.br1} txt1={this.state.txt1} txt2={this.state.txt2}/>
                    <ItemGift br={this.state.br2} txt1={this.state.txt1} txt2={this.state.txt4}/>

                    <ItemGift br={this.state.br1} txt1={this.state.txt1} txt2={this.state.txt2}/>
                    <ItemGift br={this.state.br2} txt1={this.state.txt1} txt2={this.state.txt4}/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({container: {}});