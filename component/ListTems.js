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
import Program from './Program'
const Navigation = StackNavigator({
    List: {
        screen: List,
        navigationOptions: {
            title: 'Nóng nhất trong ngày',
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