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
    swipeEnabled: false,
    activeTintColor: '#141E23',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
      flexDirection: 'column',
    },
    indicatorStyle: {
      backgroundColor: '#141e23'
    }
  }
});

export default TabNav;
