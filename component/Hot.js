import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class Party extends React.Component{

    
    render(){
        console.log('load Hot');

        return(
            <View style={{ flex: 1, backgroundColor: 'red'}}>
                <Text>HOT</Text>
            </View>
        );
    }
}