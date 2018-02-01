import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

export default class ItemGift extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            br: require('../../source/images/gift1.jpg')
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.br} source={this.props.br}>
                    <View style={styles.opacityBR}></View>
                    <TouchableOpacity
                        style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={styles.opacityBR2}>
                            <Text style={styles.txt1}>{this.props.txt1}</Text>
                            <Text style={styles.txt2}>{this.props.txt2}</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        margin: 10,
        width: 200,
        height: 200,

    },
    br: {
        overflow: 'hidden',
        flex: 1,
        borderRadius: 10,
        justifyContent: 'flex-end'
    },
    opacityBR: {
        height: 80,
        position: 'relative',
        width: undefined,
        backgroundColor: 'black',
        opacity: 0.6,
        top: 80
    },
    txt1: {
        color: 'white',
        marginTop: 10,
        width: 180,
        alignSelf: 'center',
        // backgroundColor:'red',
        textAlign: 'center'
    },
    txt2: {
        color: 'white',
        marginTop: 10,
        width: 150,
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'center'
    },
    opacityBR2: {
        height: 80,
        width: undefined,
        position: 'relative'
    }
});