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
  Keyboard,
  Icon,
  Alert,
  KeyboardAvoidingView
} from 'react-native';

import Logo from './com/Logo';
import Rule from './com/Rule';
import Or from './com/Or';
import TXTinput from './com/TXTinput';
import TXTinputPass from './com/TXTinputPass';
import Line from './com/Line';
import BtnOK from './com/BtnOK';
import TouchText2 from './com/TouchText2';
import BtnCreateBack from './com/BtnCreateBack';
import ButtonFace from './com/ButtonFace';
import RouterMain from './RouterMain';

const imageSource = {
  userLogin: {
    mail: require('../source/images/icon/ic_mail.png'),
    pass: require('../source/images/icon/ic_pw.png')
  }
};
Keyboard.dismiss(); 
export default class Userlogin extends Component {
  constructor() {
    super();
    this.state = {
      cEmail: '',
      cPass: '',
      sologan: "Đăng nhập để nhận vô vàn giải thưởng trong hệ thống của chúng tôi",
      forgot: "Quên mật khẩu ?",
      or: "Hoặc",
      facebook: "Đăng nhập với Facebook",
      register: "Tạo tài khoản mới",
      rule: "Điều khoản sử dụng",
      email: "Địa chỉ Email",
      pass: "Mật khẩu"
    };
  }
  _Login() {
    Keyboard.dismiss();

    this
      .props
      .navigation
      .navigate('Main')
  }
  _ForgotPass() {
    Keyboard.dismiss();

    this
      .props
      .navigation
      .navigate('FogotPass');
  };
  _Register() {
    Keyboard.dismiss();

    this
      .props
      .navigation
      .navigate('Register');
  }
  _Rule() {}
  _checkLogin() {
    Keyboard.dismiss();
    console.log(this.state.cEmail);
  }
  render() {

    var {navigate} = this.props.navigation;

    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View
          onPress={Keyboard.dismiss}
          keyboardShouldPersistTaps={false}
          accessible={false}>
          <Logo sologan={this.state.sologan}/>
          <View style={styles.viewLogin}>

            <TXTinput
              onChangeText={(cEmail) => this.setSate({cEmail})}
              SRCimage={imageSource.userLogin.mail}
              txtContent={this.state.email}/>

            <Line/>

            <TXTinputPass
              SRCimage={imageSource.userLogin.pass}
              txtContent={this.state.pass}/>

          </View>

          <BtnOK
            onPress={this
            ._Login
            .bind(this)}
            style={{
            top: -80,
            left: 315,
            zIndex: 1
          }}/>

          <TouchText2
            txtContent={this.state.forgot}
            onPress={this
            ._ForgotPass
            .bind(this)}/>

          <Or or={this.state.or}/>
          <ButtonFace/>
          <BtnCreateBack
            onPress={this
            ._Register
            .bind(this)}
            text={this.state.register}/>

          <Rule/>

        </View>
      </KeyboardAvoidingView>

    );
  }
}

const styles = StyleSheet.create({

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
    top: 20,
    width: 280,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    zIndex: 1
  },

  // windowSoftInputMode:'adjustResize'
});