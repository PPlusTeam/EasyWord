'use strict';
var React = require('react-native');

var {StyleSheet} = React;


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
