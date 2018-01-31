import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import ButtonFace from './com/ButtonFace';
import Logo from './com/Logo';
import Rule from './com/Rule';
import TXTinput from './com/TXTinput';
import BtnOK from './com/BtnOK';
import TouchText2 from './com/TouchText2';
import Or from './com/Or';
import BtnCreateBack from './com/BtnCreateBack';
import Line from './com/Line';

const imageSource = {
    user: require('../source/images/icon/ic_u.png'),
    place: require('../source/images/icon/ic_place.png'),
    phone: require('../source/images/icon/ic_phone.png')
};

var s = require('./style/ContainerStyle');

export default class UpdateInfoMail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sologan: "Cập nhật thông tin và mã xác thực sẽ được gửi về điện thoại của bạn!",
            user: "Họ và Tên",
            phone: "Số điện thoại",
            place: "Địa chỉ",
            text2: "*Bạn cần nhập đầy đủ thông tin  để chúng tôi gửi  những phần thưởng, ưu đãi phù " +
                    "hợp với bạn.",
            next: "Tiếp tục"
        };
    }

    _Next() {
        this
            .props
            .navigation
            .navigate('Verify')
    }
    render() {
        return (
            <View style={s.container}>
                <Logo sologan={this.state.sologan}/>
                <View style={s.viewLogin}>
                    <TXTinput txtContent={this.state.user} SRCimage={imageSource.user}/>
                    <Line/>
                    <TXTinput txtContent={this.state.phone} SRCimage={imageSource.phone}/>
                    <Line/>
                    <TXTinput txtContent={this.state.place} SRCimage={imageSource.place}/>
                </View>
                <TouchText2 txtContent={this.state.text2}/>
                <BtnCreateBack
                    onPress={this
                    ._Next
                    .bind(this)}
                    text={this.state.next}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121A1E'
    }
});