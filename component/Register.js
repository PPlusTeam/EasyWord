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
    user: require('../source/images/icon/ic_u.png'),
    mail: require('../source/images/icon/ic_mail.png'),
    pass: require('../source/images/icon/ic_pw.png')
  }
};

export default class Register extends Component {

  constructor() {
    super();
    this.state = {
      sologan: " Đăng nhập để nhận vô vàn giải thưởng trong hệ thống của chúng tôi",
      facebook: "Đăng nhập với Facebook",
      rule: "Điều khoản sử dụng",
      name: "Họ và tên",
      email: "Địa chỉ Email",
      pass: "Mật khẩu",
      back: "Quay lại"
    };
  }

  static navigationOptions = {
    title: "CreatNew"
  }
  _Back() {
    this
      .props
      .navigation
      .navigate('Userlogin')
  }
  _UpdateInfo() {
    this
      .props
      .navigation
      .navigate('UpdateInfoMail')
  }
  render() {
    var {navigate} = this.props.navigation;
    var s = require('./style/ContainerStyle');
    return (
      <View style={styles.container}>
        <Logo sologan={this.state.sologan}/>
        <View style={s.viewLogin}>
          <TXTinput SRCimage={imageSource.userLogin.user} txtContent={this.state.name}/>
          <Line/>
          <TXTinput SRCimage={imageSource.userLogin.mail} txtContent={this.state.email}/>
          <Line/>
          <TXTinput SRCimage={imageSource.userLogin.pass} txtContent={this.state.pass}/>
        </View>
        <BtnOK
          style={{
          top: -120,
          left: 315,
          zIndex: 1
        }}
          onPress={this
          ._UpdateInfo
          .bind(this)}/>
        <View>
          {/* <TouchableOpacity >
            <View style={styles.btnFace}>
              <Image source={require('../source/images/icF.png')}/>
              <Text
                style={{
                color: 'white',
                marginLeft: 20,
                fontSize: 18
              }}>{this.state.facebook}</Text>
            </View>
          </TouchableOpacity> */}

          {/* Button Create Acc */}
          <BtnCreateBack
            text={this.state.back}
            onPress={this
            ._Back
            .bind(this)}/>

          <Rule/>

        </View>

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

  viewInput: {
    flexDirection: 'row'
  },
  edtName: {
    width: 200,
    marginLeft: 20
  },
  logo: {
    height: 150,
    width: 250,
    marginTop: 10,
    alignSelf: 'center'
  },
  sologan: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    width: 290
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
    marginBottom: 10
  }
});
