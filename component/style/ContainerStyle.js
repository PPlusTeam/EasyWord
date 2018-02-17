import { Dimensions } from 'react-native';
'use strict';
var React = require('react-native');

var {StyleSheet} = React;

const {width, height} = Dimensions.get('window');
module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121A1E'
      },
      container_login: {
        backgroundColor: 'blue',
        flexDirection: 'column'
      },
      viewLogin: {
        backgroundColor: 'white',
        marginTop: 20,
        width: 280,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 10,
        zIndex: 1
      },
});
