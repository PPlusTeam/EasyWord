import React, {Component} from 'react';
import {View, Text} from 'react-native';

// var firebase = require('firebase');
import * as firebase from 'firebase';
class TestFireBase extends React.Component {
    componentWillMount() {
        var config = {
            apiKey: "AIzaSyAeex1lgutBQ0U_A1XhD8Av0JluXZBfSoE",
            authDomain: "mob306-c88d1.firebaseapp.com",
            databaseURL: "https://mob306-c88d1.firebaseio.com",
            projectId: "mob306-c88d1",
            storageBucket: "mob306-c88d1.appspot.com",
            messagingSenderId: "1016446403666"
        };
        firebase.initializeApp(config, "ASM306");
    }
    constructor(props) {
        super(props);

        // fireBaseConnection.set({FirstName: "Thanh", LastName: 'Nguyen'});
    }
}
export default class FireBase extends React.Component {
    render() {
        return (
            <View>
                <Text>This is FireBase Page</Text>
            </View>
        );
    }
}