import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    ListView,
    ImageBackground
} from 'react-native';

export default class Panel extends React.Component {
    constructor() {
        super();
        this.state = {
            background: require('../../source/images/f1.jpg'),
            txt1: 'Rủ bạn bè đi ăn ngay thôi!!!',
            txt2: 'ƯU ĐÃI HẤP DẪN MÙA MƯA'
        }
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={this.state.background}>
                <View style={styles.view1}>
                    <View style={{
                        marginLeft: 10,
                    }}>
                        <Text style={styles.txt1}>{this.state.txt1}</Text>
                        <Text style={styles.txt2}>{this.state.txt2}</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                        alignSelf: 'center',
                        
                    }}>
                        <Image
                            style={styles.btnNext}
                            source={require('../../source/images/icon/ic_next.png')}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: 100,
        marginTop: 7,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',        
    },
    btnNext: {
        height: 30,
        width: 30,
        alignSelf: 'center',
        tintColor: 'white',
        marginRight: 10
    },
    txt1: {
        color: 'white',
        fontSize: 21
    },
    txt2: {
        color: 'white',
        fontSize: 27
    }

});