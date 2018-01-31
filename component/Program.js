import React , {Component} from 'react';
import {View, Text, } from 'react-native';
import {TabNavigator} from 'react-navigation';

import Program from './Program';
import Hot from './Hot';
import Party from './Party';

 const TabNav = TabNavigator({
   
    Hot:{
      screen: Hot,
      navigationOptions:{
        title:"HOT"
      }
    },
    Party:{
      screen:Party,
      navigationOptions:{
        title:"Party"
      }
    }
  },{
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      tabStyle: {
        paddingTop: 0,
        margin: 0, //Padding 0 here
      },
      style: {
        backgroundColor: 'white',
        height: 70,
        width: null,
        padding: 0,
        flexDirection: 'column',
        justifyContent: 'center'
      },
      iconStyle: {
        width: 70,
        height: 70,
        marginTop: 0,
        marginBottom: 0,
        padding: 0
      }
    }
  });

  export default TabNav;