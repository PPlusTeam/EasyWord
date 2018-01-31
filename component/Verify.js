import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  CustomButton,
  Button,
  TouchableOpacity,
  Icon
} from 'react-native';

import Logo from './com/Logo';
import ButtonFace from './com/ButtonFace';
import Rule from './com/Rule';
import Or from './com/Or';
import TXTinput from './com/TXTinput';
import Line from './com/Line';
import BtnOK from './com/BtnOK';
import TouchText2 from './com/TouchText2';
import BtnCreateBack from './com/BtnCreateBack';

const imageSource = {
  userLogin: {
    mail: require('../source/images/icon/ic_mail.png'),
    pass: require('../source/images/icon/ic_pw.png')
  }
};

export default class Userlogin extends Component {

  static navigationOptions = {
    title: "Verify"
  }

  constructor() {
    super();
    this.state = {
      sologan: "Nhập mã số gồm 6 ký tự được gửi về điện thoại của bạn!",
      note1: "*Nhấn gửi lại nếu bạn không nhận được mã xác nhận.",
      note2: "Hãy chắc số điện thoại của bạn đã được nhập chính xác.",
      resend: "Gửi lại",
      ok: "Xác nhận",
      back: "Quay lại",
      placeholder: "XX-XXXXX9"
    };
  }
  _Back() {
    this
      .props
      .navigation
      .navigate('UpdateInfoMail')
  }
  render() {
    var {navigate} = this.props.navigation;
    var s = require('./style/ContainerStyle');

    return (
      <View style={s.container}>
        <Logo sologan={this.state.sologan}/>

        <View style={s.viewLogin}>
          <TextInput
            underlineColorAndroid='transparent'
            style={{
            textAlign: 'center',
            justifyContent: 'center'
          }}/>
        </View>

        <View style={styles.btnVerify}>
          <ButtonVerify insideButton={this.state.resend}/>
          <ButtonVerify insideButton={this.state.ok}/>
        </View>

        <View style={{
          marginTop: 20
        }}>

          <Text style={styles.txtNote}>
            {this.state.note1}
          </Text>
          <Text style={styles.txtNote}>
            {this.state.note2}
          </Text>

        </View>
        <BtnCreateBack
          text={this.state.back}
          onPress={this
          ._Back
          .bind(this)}/>
      </View>

    );
  }
}

class ButtonVerify extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.twobtn}>
        <Text
          style={{
          alignSelf: 'center',
          color: 'white',
          fontSize: 20
        }}>
          {this.props.insideButton}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  btnCreate: {
    height: 50,
    width: 160,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  twobtn: {
    height: 50,
    width: 130,
    marginTop: 10,
    borderRadius: 100,
    backgroundColor: '#FCC711',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#121A1E'
  },
  container_login: {
    backgroundColor: 'blue',
    flexDirection: 'column'
  },
  viewLogin: {
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 10,
    width: 280,
    height: 70,
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'column'
  },
  edtName: {
    padding: 10,
    fontSize: 30,
    textAlign: 'center'
  },
  edtPass: {},
  logo: {
    height: 150,
    width: 250,
    marginTop: 10,
    alignSelf: 'center'
  },
  sologan: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    width: 300
  },
  fgP: {
    color: 'white',
    alignSelf: 'center',
    position: 'relative'
  },
  btnVerify: {
    width: 280,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtNote: {
    color: 'white',
    alignSelf: 'center'
  }
});
