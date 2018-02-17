import React, {Component} from 'react';
import {Modal, View, Text, Opacity} from 'react-native';

export default class Modal_LoginSuccess extends React.Component {
    render() {
        return (
            <Modal
                visible={this.props.visible}
                animationType={'fade'}
                transparent={true}
                onRequestClose={() => this.closeModal()}>
                <View style={this.props.style}>
                    <View style={this.props.style}>
                        <Text style={this.props.style}>{this.props.loginSuccess1}</Text>
                        <Text style={this.props.style}>{this.props.loginSuccess2}</Text>
                    </View>
                </View>
            </Modal>
        );
    }
}