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

import Party from './Party';
import ContentHome from './ContentHome';
const Navigation = StackNavigator({
    ContentHome: {
        screen: ContentHome,
        navigationOptions: {
            title: 'Trang Chu',
            headerStyle: {
                backgroundColor: '#141E23'
            },
            headerTitleStyle: {
                color: 'white',
                textAlign: 'center',
                alignSelf: 'center',
                left: 20
            },
            headerRight: <TouchableOpacity
                    style={{
                    marginRight: 10
                }}>
                    <Image
                        style={{
                        height: 30,
                        width: 30
                    }}
                        source={require('../source/images/ic_qs.png')}/></TouchableOpacity>
        }
    }
}, {});
export default Navigation;

const styles = StyleSheet.create({
    iconRight: {
        height: 30,
        width: 30
    }
});
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            home: 'dawdawd'
        }
    }

    render() {
        return (
            <View>
                <Text
                    style={{
                    backgroundColor: 'red',
                    width: null
                }}>{this.state.home}</Text>
            </View>

        );
    }
}
