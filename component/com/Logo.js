import React, {Component} from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';



export default class Logo extends Component {
    render() {
        return (
            <View>
                <Image
                    style={styles.logo}
                    source={require('../../source/images/logo_yellow.png')}/>
                <Text style={styles.sologan}>
                    {this.props.sologan}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    logo: {
        height: 150,
        width: 250,
        marginTop: 10,
        alignSelf: 'center'
      },
      sologan: {
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        width: 300
      },
});