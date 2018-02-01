import React, {Componet} from 'react';
import {StyleSheet, View, Text, ImageBackground, TouchableOpacity} from 'react-native';

export default class ItemBonus extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.br}
                    source={this.props.br}>
                    <Text numberOfLines={1} style={styles.txt}>{this.props.txt}</Text>
                </ImageBackground>
            </View>
        );
    }
}
const text = "food";
const styles = StyleSheet.create({
    container: {
        height: undefined,
        width: undefined,
        justifyContent: 'center',
        alignSelf: 'center',
        // backgroundColor: 'red'
        margin:10
    },
    br: {
        height: 120,
        width: 250,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    txt: {
        color: 'white',
        fontSize: 38,
        marginLeft: 30,
        marginRight: 30,
        // backgroundColor:'red'
    }
});