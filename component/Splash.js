import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

const util = require('util');
export default class Splash extends Component {
  static navigationOptions = {
    title: "Splash"
  }


  render(){
    var {navigate} = this.props.navigation;
    return(
      <View style={styles.splash}
      >
        <TouchableOpacity
        onPress={
          ()=> navigate("Userlogin",{})
        }
          >
          <Image
            style ={styles.imagesLogo}
            source={require('../source/images/logo.png')}
           />
          </TouchableOpacity>

      </View>
    );
  }
}
const styles = StyleSheet.create({
splash: {
  flex: 1,
  backgroundColor: '#fcc813',
},
imagesLogo:{
  width: 260,
  height: 240,
  alignSelf:'center',
  marginTop: 80
}
});
