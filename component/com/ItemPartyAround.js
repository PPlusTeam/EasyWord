import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class ItemPartyAround extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avt: require('../../source/images/i1.jpg'),
            name: 'ThanhTam',
            number: '36/45'
        }
    }
    render() {

        return (
            <View style={styles.container}>
                <Image style={styles.avt} source={this.props.avt}/>
                <Text style={styles.name}>
                    {this.props.name}
                </Text>
                <View style={styles.container2}>
                    <Image
                        style={styles.icon}
                        source={require('../../source/images/icon/ic_user.png')}/>
                    <Text style={styles.number}>
                        {this.props.number}
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignSelf: 'center',
        // backgroundColor: 'yellow',
        
    },
    container2: {
        flexDirection: 'row',
        // backgroundColor: 'blue',
        justifyContent: 'center'
    },
    avt: {
        height: 80,
        width: 80,
        borderRadius: 100,
        resizeMode: 'cover',
        alignSelf: 'center'
    },
    name: {
        fontSize: 14,
        alignSelf: 'center',
        // backgroundColor: 'red',
        marginTop: 5,
        marginBottom: 5
    },
    icon: {
        height: 20,
        width: 20,
        alignSelf: 'flex-end',
        // backgroundColor:'gray',
        marginRight: 5
    },
    number: {
        alignSelf: 'center',
        // backgroundColor: 'white',
        marginRight: 10,
        marginLeft: 10
    }
});