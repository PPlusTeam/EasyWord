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
  ScrollView,
  Dimensions
} from 'react-native';

import Logo from './com/Logo';
import Or from './com/Or';
import ButtonFace from './com/ButtonFace';
import Rule from './com/Rule';
import TXTinput from './com/TXTinput'
import Line from './com/Line'
import {Firebase} from './FireBase';
export default class UpdateProfile extends Component {
  static navigationOptions = {
    title: "UpdateProfile"
  }

  constructor(props) {
    super(props);
    this.state = {
      sologan: "Cập nhật thông tin và mã xác nhận sẽ được gửi vào điện thoại của bạn!",
      back: " Quay lại",
      or: "Hoặc",
      name: "Họ và tên",
      email: "Địa chỉ Email",
      phone: "Số điện thoại",
      place: "Địa chỉ",
      next: "Tiếp tục",
      text2: "*Bạn cần nhập đầy đủ thông tin để chúng tôi gửi tặng bạn những phần thưởng, ưu đ" +
          "ãi phù hợp với bạn.",
      userIcon: require('../source/images/icon/ic_u.png'),
      phoneIcon: require('../source/images/icon/ic_phone.png'),
      placeIcon: require('../source/images/icon/ic_place.png')
    };


  }
  render() {

    var {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Logo sologan={this.state.sologan}/>

        <View style={styles.viewLogin}>
          <TXTinput SRCimage={this.state.userIcon} txtContent={this.state.name}/>
          <Line/>
          <TXTinput
            SRCimage={this.state.phoneIcon}
            keyboardType="phone-pad"
            txtContent={this.state.phone}/>
          <Line/>
          <TXTinput SRCimage={this.state.placeIcon} txtContent={this.state.place}/>
        </View>

        <TouchableOpacity
          style={styles.btnContinute}
          onPress={() => navigate("Verify", {})}>
          <Text
            style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 18
          }}>{this.state.next}</Text>
        </TouchableOpacity>

        <Text
          style={{
          position: 'relative',
          alignSelf: 'center',
          color: 'white',
          width: 300,
          marginTop: 30
        }}>{this.state.text2}</Text>
      </View>

    );
  }
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A1E',
    justifyContent: 'center'
  },
  btnContinute: {
    backgroundColor: '#FFD200',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    width: 150,
    marginTop: 20,
    borderRadius: 30
  },
  container_login: {
    backgroundColor: 'blue',
    flexDirection: 'column'
  },
  viewLogin: {
    backgroundColor: 'white',
    marginTop: 20,
    width: width - 100,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    zIndex: 1
  },
  viewInput: {
    flexDirection: 'row'
  },
  edtName: {
    width: 200,
    marginLeft: 20
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
