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
  ScrollView
} from 'react-native';

import Logo from './com/Logo';
import Or from './com/Or';
import ButtonFace from './com/ButtonFace';
import Rule from './com/Rule';

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
      address: "Khu vực",
      next: "Tiếp tục",
      text2: "*Bạn cần nhập đầy đủ thông tin để chúng tôi gửi tặng bạn những phần thưởng, ưu đ" +
          "ãi phù hợp với bạn."
    };

    async function getMoviesFromApi() {
      try {
        let response = await fetch('https://facebook.github.io/react-native/movies.json');
        let responseJson = await response.json();
        return responseJson.movies;
      } catch (error) {
        console.error(error);
      }
    };

  }
  render() {

    var {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <Logo sologan={this.state.sologan}/>

        
          <View style={styles.viewLogin}>
            <View style={styles.viewInput}>
              <Image
                style={{
                height: 20,
                width: 20,
                alignSelf: 'center'
              }}
                source={require('../source/images/icon/ic_u.png')}/>
              <TextInput
                style={styles.edtName}
                placeholder={this.state.name}
                underlineColorAndroid='transparent'/>
            </View>

            <View
              style={{
              height: 1,
              backgroundColor: 'black',
              width: 250,
              alignSelf: 'center'
            }}/>

            <View style={styles.viewInput}>
              <Image
                style={{
                height: 20,
                width: 20,
                alignSelf: 'center'
              }}
                source={require('../source/images/icon/ic_mail.png')}/>
              <TextInput
                style={styles.edtName}
                placeholder={this.state.email}
                underlineColorAndroid='transparent'/>
            </View>

            <View
              style={{
              height: 1,
              backgroundColor: 'black',
              width: 250,
              alignSelf: 'center'
            }}/>

            <View style={styles.viewInput}>
              <Image
                style={{
                height: 20,
                width: 20,
                alignSelf: 'center'
              }}
                source={require('../source/images/icon/ic_phone.png')}/>
              <TextInput
                style={styles.edtName}
                placeholder={this.state.phone}
                underlineColorAndroid='transparent'/>
            </View>

            <View
              style={{
              height: 1,
              backgroundColor: 'black',
              width: 250,
              alignSelf: 'center'
            }}/>
            <View style={styles.viewInput}>
              <Image
                style={{
                height: 20,
                width: 20,
                alignSelf: 'center'
              }}
                source={require('../source/images/icon/ic_place.png')}/>
              <TextInput
                style={styles.edtName}
                placeholder={this.state.address}
                underlineColorAndroid='transparent'/>
            </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121A1E'
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
    width: 280,
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
