import React, {Component} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class BtnCreateBack extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.btnCreate}>
                    <Text
                        style={{
                        color: 'white',
                        fontSize: 14
                    }}>
                        {this.props.text}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    btnCreate: {
        height: 50,
        width: 160,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20
      },
});