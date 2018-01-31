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


export default class SetProfile extends Component {
  static navigationOptions = {
    title: "SetProfile"
  }
  render() {

      var {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <View>
          <Image
            style={styles.logo}
            source={require('../source/images/logo_yellow.png')}/>
          <Text style={styles.sologan}>
            Đăng nhập để nhận vô vàn giải thưởng trong hệ thống của chúng tôi
          </Text>
        </View>

        <View style = {styles.viewLogin}>
          <TextInput
            style={styles.edtName}
            placeholder="Họ và tên"
            underlineColorAndroid='transparent'
          />

            <View style={{
              height:1,
              backgroundColor:'black',
              width:250,
              alignSelf:'center'
              }}/>
          <TextInput
            style={styles.edtName}
            placeholder="Địa chỉ email"
            underlineColorAndroid='transparent'
          />
          <View style={{
            height:1,
            backgroundColor:'black',
            width:250,
            alignSelf:'center'
            }}/>
        <TextInput
          style={styles.edtName}
          placeholder="Mật khẩu"
          underlineColorAndroid='transparent'
        />
          </View>
          <TouchableOpacity
            style={{
              top: -90,
              left:310,
              zIndex: 1
            }}>
          <Image
            source={require('../source/images/btnOK.png')}/>

          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.fgP}>
              Quên mật khẩu ?
            </Text>
          </TouchableOpacity>

        <View style={styles.fogetPass}>
          <View style={styles.viewLine}>
            <View style={styles.line}></View>
            <Text
              style={styles.or}>Hoặc</Text>
            <View style={styles.line}></View>
          </View>
        </View>

        <View>
          <TouchableOpacity >
            <View style={styles.btnFace}>
              <Image source={require('../source/images/icF.png')}/>
              <Text
                style={{
                color: 'white',
                marginLeft: 20,
                fontSize: 18
              }}>Đăng nhập với Facebook</Text>
            </View>
          </TouchableOpacity>

          {/* Button Create Acc */}
          <TouchableOpacity
          onPress = {
            ()=> navigate("CreateNew",{})
          }
          >
            <View style={styles.btnCreate}>
              <Text
                style={{
                color: 'white',
                fontSize: 14
              }}>
                Quay lại
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
              fontSize: 18,
              color: 'white',
              alignSelf: 'center'
            }}>Điều khoản sử dụng</Text>
          </TouchableOpacity>

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
  container_login:{
    backgroundColor:'blue',
    flexDirection:'column'
  },
  viewLogin: {
    backgroundColor: 'white',
    top: 20,
    width: 280,
    height: 150,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent:'center',
    zIndex: 1
  },
  edtName: {
    paddingLeft: 30
  },
  edtPass: {},
  logo: {
    height: 150,
    width: 250,
    marginTop:10,
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
    position: 'relative',
  },
  viewLine: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  or:{
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
