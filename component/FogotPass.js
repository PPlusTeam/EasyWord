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

import ButtonFace from './com/ButtonFace';
import Logo from './com/Logo';
import Rule from './com/Rule';
import TXTinput from './com/TXTinput';
import BtnOK from './com/BtnOK';
import TouchText2 from './com/TouchText2';
import Or from './com/Or';
import BtnCreateBack from './com/BtnCreateBack';

const imageSource = {
  userLogin: {
    mail: require('../source/images/icon/ic_mail.png'),
    pass: require('../source/images/icon/ic_pw.png')
  }
};

export default class FogotPass extends Component {

  static navigationOptions = {
    title: "FogotPass"
  }

  constructor(props) {
    super(props);
    this.state = {
      sologan: "Hãy nhập chính xác Email mà bạn đăng ký tài khoản!",
      mail: "Địa chỉ mail",
      text2: "Chúng tôi sẽ gửi mật khẩu mới vào hòm thư của bạn!",
      back: "Quay lại",
      or: "Hoặc"
    };
  }
  _Back() {
    this
      .props
      .navigation
      .back();
  }
  _UpdateInfoMail() {
    this
      .props
      .navigation
      .navigate('UpdateInfoMail')
  }
  render() {

    var {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>

        <Logo sologan={this.state.sologan}/>

        <View style={styles.viewLogin}>

          <TXTinput SRCimage={imageSource.userLogin.mail} txtContent={this.state.mail}/>
        </View>

        <BtnOK
          onPress={this
          ._UpdateInfoMail
          .bind(this)}
          style={{
          top: -70,
          left: 315,
          zIndex: 1
        }}/>

        <TouchText2 txtContent={this.state.text2}/>
        <Or or={this.state.or}/>
        <BtnCreateBack
          onPress={this
          ._Back
          .bind(this)}
          text={this.state.back}/>
        <Rule/>
      </View>

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
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    zIndex: 1
  },
  edtName: {
    padding: 20
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
    width: 240
  },
  fgP: {
    color: 'white',
    alignSelf: 'center',
    position: 'relative'
  },
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
  },
  btnFace: {
    height: 50,
    width: 300,
    backgroundColor: '#3B5998',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5
  },
  btnCreate: {
    height: 50,
    width: 160,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20
  }
});
