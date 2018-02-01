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
  // Party: {
  //   screen: Party,
  //   navigationOptions: {
  //     title: "Party"
  //   }
  // }
}, {
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: '#141E23',
    inactiveTintColor: 'gray',
    tabStyle: {
      paddingTop: 0,
      margin: 0, //Padding 0 here,
    },
    style: {
      backgroundColor: 'white',
      height: 70,
      width: null,
      padding: 0,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    indicatorStyle: {
      backgroundColor: '#141e23'
    }
  }
});

export default class Show extends React.Component{
  render(){
    console.log("Class Render");
    return(
      <View style={{flex:1, backgroundColor: 'yellow'}}>
        <TabNav style={{ flex: 1, backgroundColor: 'blue', zIndex: 999}}> </TabNav>
      </View>
    );
  }
}

// export default TabNav;
