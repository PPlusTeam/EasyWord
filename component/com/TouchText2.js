import React, {Component} from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

export default class TouchText2 extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text style={styles.fgP}>
                    {this.props.txtContent}
                </Text>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    fgP: {
        color: 'white',
        alignSelf: 'center',
        position: 'relative',
        fontSize: 18,
        marginTop:10,
        width:300,
        alignSelf: 'center',
        textAlign:'center'
      },
});