import React, {Component} from 'react';
import {View,} from 'react-native';

export default class Line extends React.Component {
    render() {
        return (<View
            style={{
            height: 1,
            backgroundColor: 'black',
            width: 250,
            alignSelf: 'center'
        }}/>);
    }
}