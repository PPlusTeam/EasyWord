import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Image, StyleSheet} from 'react-native';

export default class TXTinput extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <View style={styles.viewInput}>
                <Image
                    style={{
                    height: 20,
                    width: 20,
                    alignSelf: 'center'
                }}
                    source={this.props.SRCimage}/>
                <TextInput
                    style={styles.edtName}
                    onEndEditing={this.clearFocus}
                    keyboardType='email-address'
                    onChangeText={this.props.onChangetext}
                    placeholder={this.props.txtContent}
                    underlineColorAndroid='transparent'/>
            </View>
        );
    }
}
class TXTinputPass extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <View style={styles.viewInput}>
                <Image
                    style={{
                    height: 20,
                    width: 20,
                    alignSelf: 'center'
                }}
                    source={this.props.SRCimage}/>
                <TextInput
                    style={styles.edtName}
                    secureTextEntry
                    placeholder={this.props.txtContent}
                    underlineColorAndroid='transparent'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewInput: {
        flexDirection: 'row'
    },
    edtName: {
        width: 200,
        marginLeft: 20,
        fontSize: 20,
    }
});