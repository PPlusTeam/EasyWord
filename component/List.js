import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,PureComponent , FlatList, Dimensions} from 'react-native';
import {Firebase} from './FireBase';

export default class List extends React.Component {

    constructor(props){
        super(props);
        this.state={

        },
        this.itemRef = Firebase.database().ref().child('Stores');
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                    {
                        key: 'adsadawd'
                    }, {
                        key: 'bww'
                    }, {
                        key: 'ưc'
                    }, {
                        key: 'dd'
                    }, {
                        key: 'aa'
                    }, {
                        key: 'bf'
                    }
                ]}
                    renderItem={({item}) => <Text>{item.key}</Text>}/>
            </View>
        );
    }
}
const {width,height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container:{
        marginLeft: width*3.6/187,
        marginRight: width*3.6/187,
        flex:1,
        backgroundColor:'red',
    },

});