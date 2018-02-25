import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    Dimensions,
    FlatList
} from 'react-native';

import {Firebase} from './FireBase';

export default class List extends React.Component {
    constructor(prop) {
        super(prop);
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

            postContent:'',
            post:[],
            modalVisible:false,
        }

        this.itemsRef = Firebase.database().ref().child('shop');

    }

    _showDialog = () =>{
        this.setState({modalVisible:true})
    }
    _hideDialog= () =>{
        this.setState({modalVisible:false})
    }
    _post = () => {
        this.setState({modalVisible:true})
    }
    _renderItem = ({item}) => (
      <MyListItem
        id={item.id}
        onPress ={this._onPressItem}
        selected = {!!this.state.selected.get(item.id)}
        title = {item.title}/>
    );
    _listenForItems(itemsRef){
        itemsRef.on('value'),(snap) =>
        {
            var items = [];
            snap.forEach(
                (child) =>
                {
                    let t = {
                        key:(child.key),
                        id:child.val().id,
                        name:child.val().name,
                        price: child.val().price,
                        info: child.val().info
                    }
                    item.push(
                        t
                    );
                }
            )
        }
    }
    _FlatListSaparator(){

    }
    render() {
        return (
            <View style={styles.container}>
               <FlatList
               data={this.state.dataList}
               renderItem={({item})=><Text>{item.key}</Text>}
               extraData={this.state}
               />
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
