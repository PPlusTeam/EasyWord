import React from 'react';
import {View, Text} from 'react-native';

import {TabNavigator} from 'react-navigation';

import Program from './Program';
import Hot from './Hot';
import Party from './Party';
import TabHome from './TabHome';

const TabNav = TabNavigator({
  Program: {
    screen: Program,
    navigationOptions: {
      title: "Chương Trình"
    }
  },
  Hot: {
    screen: Hot,
    navigationOptions: {
      title: "Nổi Bật"
    }
  },
  Party: {
    screen: Party,
    navigationOptions: {
      title: "Party"
    }
  }
}, {
  tabBarOptions: {

    titleStyle: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    showIcon: true,
    showLabel: true,
    activeTintColor: '#141E23',
    inactiveTintColor: 'gray',
    tabStyle: {
      // paddingTop: 0,
      height: 60,
      width: null,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    style: {
      backgroundColor: 'white',
      flexDirection: 'column',
      margin:0,
      justifyContent: 'center',
    },
    indicatorStyle: {
      backgroundColor: '#141e23'
    }
  }
});

export default TabNav;
