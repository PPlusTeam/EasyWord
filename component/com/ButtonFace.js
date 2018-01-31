import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

export default class ButtonFace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            face: "Đăng nhập với Facebook"
        };
    }
    render() {
        return (
            <TouchableOpacity style={styles.container}>
                <Image source={require('../../source/images/icF.png')}/>
                <Text style={styles.text}>{this.state.face}</Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        height: 60,
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#3F51B5',
        borderRadius: 8
    },
    text: {
        color: 'white',
        width: 220,
        fontSize: 20
    }
});