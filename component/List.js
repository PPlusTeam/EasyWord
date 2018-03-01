import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Modal
} from 'react-native';

import {Firebase} from './FireBase';

var ImagePicker = require('react-native-image-picker');

var options = {
    title: 'Select Avatar',
    customButtons: [
        {
            name: 'fb',
            title: 'Choose Photo from Facebook'
        }
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

export default class List extends React.Component {
    constructor(prop) {
        super(prop);
        //Create a ref is a child of database() or create a ref child at parent knot
        this.itemRef = Firebase
            .database()
            .ref('Product');
        this.state = {
            dataList: [
                {
                    key: 'a'
                }, {
                    key: 'b'
                }, {
                    key: 'c'
                }
            ],
            avatarSource: null
        }

    }
    _uploadImage() {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = {
                    uri: response.uri
                };

                // You can also display the image using data: let source = { uri:
                // 'data:image/jpeg;base64,' + response.data };

                this.setState({avatarSource: source});
            }
        });
    }
    _setDataBase() {
        Firebase.database()
            .ref('T').child('Item3')
            .push({Demo: 'Demo ssssa'});
    }
   
    render() {
        return (
            <View style={styles.container}>
                
                <TouchableOpacity onPress={()=>this._setDataBase()}>
                    <Text>
                        Set Realtime DataBase
                    </Text>

                    
                </TouchableOpacity>
            </View>
        );
    }
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }
});
