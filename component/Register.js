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
  Icon,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Keyboard
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

import {Firebase} from './FireBase';

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
      repass: "Nhập lại mật khẩu",
      back: "Quay lại",
      dissimilar: 'Mật khẩu không giống nhau, xin kiểm tra lại!',
      errorNull: 'Xin nhập đủ địa chỉ email, mật khẩu',
      checkE: '',
      checkP: '',
      checkReP: '',
      enoughLength: 'Xin nhập mật khẩu lớn hơn 8 ký tự'
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
  _RegisterSuccess() {
    Keyboard.dismiss();
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (this.state.checkE == '' && this.state.checkP == '') {
      Alert.alert(this.state.errorNull);
    } else if (pattern.test(this.state.checkE) === false) {
      Alert.alert("Xin nhập đúng định dạng email!")
      return false;
    } else if (this.state.checkReP != this.state.checkP) {
      Alert.alert(this.state.dissimilar);
    } else if (this.state.checkP.length < 8) {
      Alert.alert(this.state.enoughLength)
    } else {
      Firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.checkE, this.state.checkP)
        .then(() => {
          Alert.alert('Success Register')
          this
            .props
            .navigation
            .navigate('UpdateInfoMail')
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    }
  }
  render() {
    var {navigate} = this.props.navigation;
    var s = require('./style/ContainerStyle');
    return (
      <View style={styles.container}>
        <Logo sologan={this.state.sologan}/>
        <View style={s.viewLogin}>
          <TXTinput
            SRCimage={imageSource.userLogin.mail}
            keyboardType="email-address"
            onChangeText={(value) => {
            this.setState({checkE: value})
          }}
            txtContent={this.state.email}/>
          <Line/>
          <TXTinput
            SRCimage={imageSource.userLogin.pass}
            secureTextEntry={true}
            onChangeText={(value) => {
            this.setState({checkP: value})
          }}
            txtContent={this.state.pass}/>
          <Line/>
          <TXTinput
            SRCimage={imageSource.userLogin.pass}
            secureTextEntry={true}
            onChangeText={(value) => {
            this.setState({checkReP: value})
          }}
            txtContent={this.state.repass}/>
        </View>

        <BtnOK
          style={{
          top: -120,
          left: 315,
          zIndex: 1
        }}
          onPress={this
          ._RegisterSuccess
          .bind(this)}/>
        <View>
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
    backgroundColor: '#121A1E',
    position: 'relative'
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