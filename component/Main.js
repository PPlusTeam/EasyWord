import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import {TabNavigator} from 'react-navigation';
import FontAwesome, {Icon} from 'react-native-fontawesome';
import Home from './Home';
import Party from './Party';
import ContentHome from './ContentHome';
import List from './List';
import Personal from './Personal';
import Contact from './Contact'
import AboutTems from './AboutTems'
import TabNav from './ContentHome'
import ListTems from './ListTems'
import FeedbackTems from './FeedbackTems'

const Navigation = TabNavigator({
 
  MainHome: {
    screen: ListTems,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image
        style={[styles.icon]}
        source={require('../source/images/icon/buger_choice.png')}/>)
    }
  },
  Tab2: {
    screen: AboutTems,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image
        style={[styles.icon]}
        source={require('../source/images/icon/ic_compass_choice.png')}/>)
    }
  },
  Tab3: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image
        style={[styles.logo]}
        source={require('../source/images/icon/ic_logo.png')}/>)
    }

  },
  Tab4: {
    screen: FeedbackTems,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image
        style={[styles.icon]}
        source={require('../source/images/icon/diamond.png')}/>)
    }
  },
  Tab5: {
    screen: Personal,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (<Image
        style={[styles.icon]}
        source={require('../source/images/icon/ic_user.png')}/>)
    }
  },
}, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: 'black',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
    },
    iconStyle: {
      width: 70,
      height: 70,
    },
  }
})
export default Navigation;

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30
  },
  logo: {
    height: 70,
    width: 70
  }
});
