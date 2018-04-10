import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import List from './List';
import ContentHome from './ContentHome';
import Contact from './Contact'

import About from './About'
const Navigation = StackNavigator({
    Contact: {
        screen: Contact,
        navigationOptions: {
            title: 'Phản hồi của bạn',
            headerStyle: {
                backgroundColor: '#141E23'
            },
            headerTitleStyle: {
                color: 'white',
                textAlign: 'center',
                alignSelf: 'center',
            },
            
        }
    }
}, {});

export default  Navigation;

 class Show extends React.Component {
    render() {
        console.log("Class Render");
        return (
            <View
                style={{
                display: 'flex',
                flex: 1,
                backgroundColor: 'red'
            }}>
            <Navigation/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  
});