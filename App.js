import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';

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
import ContentHome from './component/ContentHome';
import HotGift from './component/com/HotGift';
import RouterMain from './component/RouterMain';
import Home from './component/Home';
import TestModal from './component/TestModal';
import login from './DemeOfMob306/login';
import register from './DemeOfMob306/register';
import home from './DemeOfMob306/home';
import upImage from './DemeOfMob306/upImage';
import FireBase from './component/FireBase';
// import List from './component/List'; import ButtonFace from
// './component/com/ButtonFace'; import LoginFacebook from
// './component/com/LoginFacebook';

const Navigation = StackNavigator({
  
  Main: {
    screen: Main
  },
  Splash: {
    screen: Splash
  },

  UpdateProfile: {
    screen: UpdateProfile
  },
  FogotPass: {
    screen: FogotPass
  },
  Userlogin: {
    screen: Userlogin
  },
  login: {
    screen: login
  },
  register: {
    screen: register
  },
  home: {
    screen: home
  },
  Register: {
    screen: Register
  },
  
  ContentHome: {
    screen: ContentHome
  },
  Home: {
    screen: Home
  },
  ButtonFace: {
    screen: ButtonFace
  },
  Register: {
    screen: Register
  },
  Verify: {
    screen: Verify
  },
  UpdateInfoMail: {
    screen: UpdateInfoMail
  },

  
  RouterMain: {
    screen: RouterMain
  }
}, {headerMode: 'none'});
export default Navigation;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
      'u'
});
