import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions} from 'react-native';

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
                    keyboardType={this.props.keyboardType}
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.txtContent}
                    underlineColorAndroid='transparent'/>
            </View>
        );
    }
}

const {width, height}= Dimensions.get('window');
class TXTinputPass extends React.Component {
    constructor() {
        super();

    }
    render() {
        return (
            <View style={styles.viewInput}>
                <Image
                    style={styles.icon}
                    source={this.props.SRCimage}/>
                <TextInput
                    style={styles.edtName}
                    secureTextEntry
                    keyboardType={this.props.keyboardType}
                    placeholder={this.props.txtContent}
                    underlineColorAndroid='transparent'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:width*2.6/187.5,
        // backgroundColor:'red',
        borderRadius:10,
        paddingLeft: 20,        
    },
    edtName: {
        width: width-150,
        fontSize: 20,
        marginLeft:10,
    },
    icon:{
        height: 20,
        width: 20,
        alignSelf: 'center'
    }
});