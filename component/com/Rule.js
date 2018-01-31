import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class Rule extends React.Component {
    constructor(){
        super();
        this.state={
            rule:"Điều khoản sử dụng"
        };
    }
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text
                    style={{
                    fontSize: 18,
                    color: 'white',
                    alignSelf: 'center'
                }}>{this.state.rule}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({});