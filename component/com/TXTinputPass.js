import React, {Component} from 'react';
import {View, TextInput, Image, Keyboard, StyleSheet} from 'react-native';

export default class TXTinputPass extends React.Component {
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
                    onEndEditing={this.clearFocus}
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={this.props.onChangetext}
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