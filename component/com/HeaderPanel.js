import React, {Component} from 'react';
import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';

export default class HeaderPanel extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.txt}>
                    {this.props.title}
                </Text>
                <TouchableOpacity style={styles.touch}>
                    <Image
                        style={styles.icBurger}
                        source={require('../../source/images/icon/ic_burger.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        justifyContent: 'center'
    },
    icBurger: {
        height: 40,
        width: 40,
        tintColor: 'gray'
    },
    touch: {
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    txt: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'black'
    }
});