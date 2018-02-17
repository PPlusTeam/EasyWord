import React, {Component} from 'react';
import {View, Dimensions,} from 'react-native';

export default class Line extends React.Component {
    render() {
        return (<View
            style={{
            height: 1,
            backgroundColor: 'black',
            width: width-130,
            alignSelf: 'center'
        }}/>);
    }
}
const {height, width} = Dimensions.get('window');