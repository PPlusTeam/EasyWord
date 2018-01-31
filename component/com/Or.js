import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Or extends React.Component {
    constructor() {
        super();
 
    }
    render() {
        return (
            <View style={styles.viewLine}>
                <View style={styles.line}></View>
                <Text style={styles.or}>{this.props.or}</Text>
                <View style={styles.line}></View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewLine: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    or: {
        color: 'white',
        fontSize: 14
    },
    line: {
        height: 1,
        alignSelf: 'center',
        width: 100,
        margin: 10,
        alignSelf: 'center',
        backgroundColor: 'white'
    }
});