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
    // showLabel: true,
    titleStyle: {
      justifyContent: 'center',
      alignItems: 'center'
    },
    showIcon: true,
    showLabel: true,
    activeTintColor: '#141E23',
    inactiveTintColor: 'gray',
    tabStyle: {
      paddingTop: 0,
      margin: 0, //Padding 0 here,   },   style: {     backgroundColor: 'white',
      height: 70,
      width: null,
      padding: 0,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    style: {
      backgroundColor: 'white',
      padding: 0,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    indicatorStyle: {
      backgroundColor: '#141e23'
    }
  }
});

export default TabNav;
