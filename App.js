import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator,TabNavigator} from 'react-navigation';

import Userlogin from './component/Userlogin';
import Splash from './component/Splash';
import Main from './component/Main';
import Verify from './component/Verify';
import Register from './component/Register';
import FogotPass from './component/FogotPass';
import SetProfile from './component/SetProfile';
import UpdateProfile from './component/UpdateProfile';
import UpdateInfoMail from './component/UpdateInfoMail';
import ButtonFace from './component/com/ButtonFace';


// import ButtonFace from './component/com/ButtonFace';
// import LoginFacebook from './component/com/LoginFacebook';

const Navigation = StackNavigator({
  // LoginFacebook:{screen:LoginFacebook},
  Main: {
    screen:Main,
    navigationOptions:({navigation})=>{
      titile:"Trang Chu"
    }
  },
  Userlogin:{screen: Userlogin},
  ButtonFace : {screen: ButtonFace},
  Register: {screen: Register},
  Verify:{screen:Verify},
  UpdateInfoMail:{screen:UpdateInfoMail},
  FogotPass:{screen:FogotPass},
  Splash:{screen: Splash},
},
{
  headerMode:'none'
});
export default Navigation;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

