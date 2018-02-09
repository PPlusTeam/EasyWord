import React, {Component} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class BtnOK extends React.Component {

    render() {
        return (
            <TouchableOpacity
                style={this.props.style}
                onPress={this.props.onPress}    
            >
                <Image source={require('../../source/images/btnOK.png')}/>
            </TouchableOpacity>
        );
    }

}

