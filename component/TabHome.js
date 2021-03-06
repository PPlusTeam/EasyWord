import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {TabNavigator} from 'react-navigation';

import Program from './Program';
import Hot from './Hot';
import Party from './Party';

const TabNav = TabNavigator({

    Program: {
        screen: Program,
        navigationOptions: {
            title: "Chuong Trinh"
        }
    },

    Program: {
        screen: Program,
        navigationOptions: {
            title: "Chuong Trinh"
        }
    },
    Hot: {
        screen: Hot,
        navigationOptions: {
            title: "HOT"
        }
    },
    Party: {
        screen: Party,
        navigationOptions: {
            title: "Party"
        }
    }
}, {
   
});

export default TabNav;