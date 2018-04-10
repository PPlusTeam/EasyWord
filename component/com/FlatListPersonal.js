import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    FlatList,
    ListView,
    TouchableOpacity,
    Alert,
    Modal,
    Dimensions,
    ScrollView,
    ToastAndroid,
    TextInput
} from 'react-native';

import {Firebase} from '../FireBase';

export default class FlatListPersonal extends React.Component {

    constructor(props) {
        super(props);
        dataBase = Firebase.database();
        var dataID;

        // var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        // Empty Array content Data Base from firebase
        this.items = [];
        this.state = {
            name: '',
            detail: '',
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            visibleModal: false,

            changedName: '',
            changedDetail: '',

            changingName: '',
            changingDetail: '',

            labelName: 'Tên: ',
            labelDetail: 'Mô tả: '
        }
    }

    componentDidMount() {
        var items = [];
        console.log("1");
        // dataBase     .ref("Note")     .on("value", (snap) => { snap.forEach((data) =>
        // {             items.push({                 key: data.key, data: data.val()
        // }); this.setState({                 dataSource: this     .state .dataSource
        // .cloneWithRow(items)      })
        // console.log('===================================='); console.log(items);
        // console.log('====================================');    })     })
        dataBase
            .ref("NOTE")
            .on("child_added", (data) => {

                items.push({
                    key: data.key,
                    data: data.val()
                });

                this.setState({
                    dataSource: this
                        .state
                        .dataSource
                        .cloneWithRows(items)
                })

            })
        console.log("2");
    }

    listemForItems(dataBase) {
        var items = [];
        dataBase
            .ref("NOTE")
            .on("child_added", (data) => {

                items.push({
                    key: data.key,
                    data: data.val()
                });

                this.setState({
                    dataSource: this
                        .state
                        .dataSource
                        .cloneWithRows(items)
                })

            })
    }
    _longPress(data) {
        dataID = data;
        Alert.alert('Cảnh báo', 'Bạn muốn ...', [
            {
                text: 'Sửa',
                onPress: () => this._changeData(data)
            }, {
                text: 'Xóa',
                onPress: () => this._removeData(data)
            }, {
                text: 'Hủy',
                onPress: () => console.log('Cancel'),
                style: 'cancel'
            }
        ], {cancelable: false})
    }
    _removeData(data) {

        dataBase
            .ref('NOTE')
            .child(data.key)
            .remove();

        this.listemForItems(dataBase);
    }
    _changeData(data) {
        this.setState({changedName: data.data.Name})

        this.setState({changedDetail: data.data.Detail}) ;

        this.setState({visibleModal: true})

        // ToastAndroid.show(this.state.changedName+'',ToastAndroid.SHORT)
    }
    _renderRow(data) {
        return (
            <TouchableOpacity
                onLongPress={() => {
                this._longPress(data)
            }}
                style={styles.containerItems}>
                <Text
                    style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: 'white',
                }}>
                    {data.data.Name}</Text>
                <Text style={{
                    fontSize: 14,
                    color: 'white',
                }}>
                    {data.data.Detail}</Text>
            </TouchableOpacity>
        );
    }

    _OK() {
        dataBase
            .ref('NOTE')
            .child(dataID.key)
            .set({Name: this.state.changedName, Detail: this.state.changedDetail})
            this.listemForItems(dataBase);
        this.setState({visibleModal: false})
    }

    _CANCEL() {
        this.setState({visibleModal: false})
    }

    render() {
        return (

            <ScrollView>
                <Modal
                    visible={this.state.visibleModal}
                    animationType={'fade'}
                    onRequestClose={() => this.setState({visibleModal: false})}>
                    <View
                        style={{
                        flex: 1,
                        backgroundColor: mainColor,
                        zIndex: 99,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={styles.containerModal}>
                            <Text style={styles.txtAddModel}>
                                Tiêu Đề:
                            </Text>
                            <TextInput
                                style={styles.edtModal}
                                placeholderTextColor="white"
                                underlineColorAndroid='transparent'
                                value={this.state.changedName}
                                onChangeText={(value) => {
                                this.setState({changedName: value})
                            }}/>
                            <Text style={styles.txtAddModel}>
                                Ghi Chú:
                            </Text>
                            <TextInput
                                style={styles.edtModal}
                                placeholderTextColor="white"
                                underlineColorAndroid='transparent'
                                value={this.state.changedDetail}
                                onChangeText={(value) => {
                                this.setState({changedDetail: value})
                            }}/>

                            <View
                                style={{
                                flexDirection: 'row',
                                marginTop: 20,
                                justifyContent: 'space-between',
                                width: 240,
                                alignItems: 'center',
                                alignSelf: 'center'
                            }}>

                                <_btnModal
                                    onPress={() => {
                                    this._OK()
                                }}
                                    label='Ok'/>
                                <_btnModal
                                    onPress={() => {
                                    this._CANCEL()
                                }}
                                    label='Cancel'/>

                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={styles.containerFlatList}>

                    <Text
                        style={{
                        fontSize: 23,
                        fontWeight: 'bold',
                        marginTop: 10,
                        marginBottom: 15,
                        color: 'white',
                        
                    }}>Ghi chú của bạn</Text>

                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this
                        ._renderRow
                        .bind(this)}/>
                </View>
            </ScrollView>
        );
    }
}

class EditModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }
    _okModal() {}

    _cancelModal() {}

    render() {
        return (
            <View style={styles.containerModal}>
                <Text style={styles.txtAddModel}>
                    Tiêu Đề:
                </Text>
                <TextInput
                    style={styles.edtModal}
                    placeholderTextColor="white"
                    underlineColorAndroid='transparent'
                    value={this.props.NAME}
                    onChangeText={(value) => {
                    this.setState({changedName: value})
                }}/>
                <Text style={styles.txtAddModel}>
                    Ghi Chú:
                </Text>
                <TextInput
                    style={styles.edtModal}
                    placeholderTextColor="white"
                    underlineColorAndroid='transparent'
                    value={this.props.DETAIL}
                    onChangeText={(value) => {
                    this.setState({changedDetail: value})
                }}/>

                <View
                    style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-between',
                    width: 240,
                    alignItems: 'center',
                    alignSelf: 'center'
                }}>

                    <_btnModal onPress={this.props.onPressOK} label='Ok'/>
                    <_btnModal onPress={this.props.onPressCancel} label='Cancel'/>

                </View>
            </View>
        );
    }
}

class _btnModal extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={{
                backgroundColor: mainColor,
                borderColor: 'white',
                borderWidth: 2,
                height: 40,
                width: 100,
                borderRadius: 10,
                justifyContent: 'center'
            }}
                onPress={this.props.onPress}>
                <Text
                    style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold',
                    alignSelf: 'center'
                }}>
                    {this.props.label}
                </Text>
            </TouchableOpacity>
        );
    }
}
const mainColor = '#FFCF1C';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    edtModal: {
        // backgroundColor: 'blue',
        width: width - 150,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    txtAddModel: {
        fontSize: 18,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10
    },
    containerModal: {
        flexDirection: 'column',
        zIndex: 1000,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    containerFlatList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    containerItems: {
        borderBottomWidth: 2,
        borderBottomColor: mainColor,
        width: width - 60,
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10
    },
    modal: {
        flex: 1,
        backgroundColor: mainColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
});