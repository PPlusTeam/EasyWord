import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    ListView
} from 'react-native';
import Row from './Row';

// const oval1 = require('../../source/images.oval/1.png');
const image1 = require('../../source/images/1.jpeg');
const image2 = require('../../source/images/2.jpeg');
const image3 = require('../../source/images/3.jpeg');

var data = [
    {
        title: "You image title",
        image: image1
    }, {
        title: "Your Image title",
        image: image2
    }
]

export default class Panel extends React.Component {
    constructor() {
        super();

        this.state = {
            uri: require('../../source/images/oval/2.png')
        }

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows([
                'item 1',
                'item 2',
                'item 3',
                'item 4',
                'item 5',
                'item 6',
                'item 7',
                'item 8',
                'item 9',
                'item 10',

            ])
        };

    }

    static navigationOptions = {
        header: null
    }
    changeLogo() {
        console.log('state changed!');
        this.setState({uri: require('../../source/images/oval/3.png')});
    }
    _change() {}
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <View
                        style={{
                        backgroundColor: '#CCFFFF',
                        height: 250
                    }}>
                        <View onPress={this._Change} style={styles.styles}>
                            <Text
                                style={{
                                textAlign: 'center'
                            }}>Logo</Text>
                        </View>

                        <View style={styles.viewHeart}>
                            <Text
                                style={{
                                color: 'white',
                                fontSize: 18,
                                width: 100
                            }}>{this.props.text1}</Text>

                            <TouchableOpacity style={styles.logoStyle} onPress={() => this.changeLogo()}>
                                <Image source={this.state.uri}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
                <ListView
                    dataSource={this.state.dataSource}
                    horizontal={true}
                    renderRow={(rowData) => <Text style={styles.item}>{rowData}</Text>}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    picOval: {},
    item: {
        margin: 5,
        height:50,
        width:50,
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:'red',
        color:'white'
    },
    styles: {
        backgroundColor: 'yellow',
        height: 60,
        width: 60,
        alignSelf: 'center',
        position: 'relative',
        margin: 30
    },
    viewHeart: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        flexDirection: 'row'
    },
    logoStyle: {
        height: 50,
        width: 30,
        marginLeft: 10,
        marginRight: 5
    }
});