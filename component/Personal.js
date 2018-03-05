import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    ScrollView,
    Modal,
    TextInput,
    FlatList,
    ListView,
    ToastAndroid,
    Platform
} from 'react-native';

import RNFetchBlob from 'react-native-fetch-blob';

import {Firebase} from './FireBase';
import TXTinput from './com/TXTinput';
import Line from './com/TXTinput';
import FlatListPersonal from './com/FlatListPersonal';

const storage = Firebase.storage();
const fs = RNFetchBlob.fs;
const Blob = RNFetchBlob.polyfill.Blob;

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = Blob;

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

const uploadImage = (uri, mime = 'application/octet-stream') => {
    return new Promise((resolve, reject) => {
        const uploadUri = Platform.OS === 'ios'
            ? uri.replace('file://', '')
            : uri
        const sessionId = new Date().getTime()
        let uploadBlob = null
        const imageRef = storage
            .ref('images')
            .child(`${sessionId}`)

        fs
            .readFile(uploadUri, 'base64')
            .then((data) => {
                return Blob.build(data, {type: `${mime};BASE64`})
            })
            .then((blob) => {
                uploadBlob = blob
                return imageRef.put(blob, {contentType: mime})
            })
            .then(() => {
                uploadBlob.close()
                return imageRef.getDownloadURL()
            })
            .then((url) => {
                resolve(url)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brCover: require('../source/images/cover.jpg'),
            brAvt: require('../source/images/avt.jpg'),
            name: 'Rabbit Soup',
            detail1: 'Dev in PP Company',
            cacheName: '',
            cacheDetail: '',
            modalVisible: false,
            modalAdd: false,
            labelName: 'Tên: ',
            labelDetail: 'Mô tả: ',
            upCover: 'Thêm ảnh nền',

            // Modal Add Post
            l1: 'Tiêu đề',
            l2: 'Ghi chú',
            btnOK: 'Lưu',
            cancel: 'Hủy',
            tT: 'Nhập tiêu đề .....',
            tN: 'Nhập nội dung .....',
            nameModal: '',
            detail: ''
        }

        this.itemRef = Firebase
            .database()
            .ref("NOTE");
    }
    _editInfo() {
        this.setState({modalVisible: true});
    }
    _pickImage() {
        this.setState({brCover: null})

        ImagePicker.launchImageLibrary({}, response => {
            uploadImage(response.uri).then(url => {
                this.setState({brCover: url}),
                console.log(url)
            }).catch(error => console.log(error))
        })
    }
    _uploadCover() {
        console.log('uploadCover clicked')
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            this.setState({brCover: require('../source/images/cover.jpg')})
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


                uploadImage(response.uri)
                    .then(url => this.setState({brCover: source}))
                    .catch(error => console.log(error + ""))

            }
        });
    }
    _uploadAvt() {
        console.log('uploadAvt clicked')
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

                this.setState({brAvt: source});
            }
        });
    }
    _closeModal() {
        this.setState({modalVisible: false})
    }
    _okModal() {
        this.setState({name: this.state.cacheName});
        this.setState({detail1: this.state.cacheDetail});
        if(this.state.cacheName == '' && this.state.cacheDetail == ''){
            ToastAndroid.show('Vui lòng nhập đủ nội dung', ToastAndroid.LONG);
        }
        else{
            this.setState({modalVisible: false})
        }
    }
    _cancelModal() {
        this._closeModal();
    }
    _openAddModal() {
        this.setState({modalAdd: true})
    }

    _OK() {
        this
            .itemRef
            .push({Name: this.state.nameModal, Detail: this.state.detail})
        ToastAndroid.show('Lưu thành công', ToastAndroid.SHORT);
        this.setState({modalAdd: false});
        // console.log(this.state.name + ' + '+ this.state.detail)
    }
    _Cancel() {
        this.setState({modalAdd: false})
    }

    render() {
        return (
            <View style={styles.container}>
                {/*Modal*/}
                <Modal
                    visible={this.state.modalVisible}
                    animationType={"fade"}
                    transparent={true}
                    position={"center"}
                    onRequestClose={() => this._closeModal()}>
                    <View style={styles.modal}>
                        <_TextInput
                            onChangeText={(value) => this.setState({cacheName: value})}
                            title={this.state.labelName}
                            value={this.state.name}/>
                        <_TextInput
                            onChangeText={(value) => this.setState({cacheDetail: value})}
                            title={this.state.labelDetail}
                            value={this.state.detail1}/>

                        <BtnUpload
                            onPress={() => {
                            this._uploadCover()
                        }}/>
                        <View
                            style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            justifyContent: 'space-between',
                            width: 240
                        }}>

                            <_btnModal
                                onPress={() => {
                                this._okModal()
                            }}
                                label='Ok'/>
                            <_btnModal
                                onPress={() => {
                                this._cancelModal()
                            }}
                                label='Cancel'/>

                        </View>
                    </View>
                </Modal>
                {/* Cover Picture */}
                <View style={styles.headerUser}>
                    <ImageBackground style={styles.brCover} source={this.state.brCover}>
                        <View
                            style={{
                            paddingLeft: 30
                        }}>
                            <Text style={styles.txtName}>
                                {this
                                    .state
                                    .name
                                    .toUpperCase()}
                            </Text>
                            <Text style={styles.txtDetail}>
                                {this.state.detail1}
                            </Text>

                        </View>
                        <BtnEdit
                            onPress={this
                            ._editInfo
                            .bind(this)}/>
                    </ImageBackground>

                    <Modal
                        visible={this.state.modalAdd}
                        animatedType={'fade'}
                        transparent={true}
                        hardwareAccelerated={true}
                        onRequestClose={() => {
                        this.setState({modalAdd: false})
                    }}>

                        <View style={styles.containerModalAdd}>

                            <LineModal
                                onChangeText={(value) => {
                                this.setState({nameModal: value})
                            }}
                                value={this.state.l1}
                                placeholder={this.state.tT}/>
                            <LineModal
                                onChangeText={(value) => {
                                this.setState({detail: value})
                            }}
                                value={this.state.l2}
                                placeholder={this.state.tN}/>
                            <View style={styles.VbtnModal}>
                                <BtnModal value={this.state.btnOK} onPress={() => this._OK()}/>
                                <BtnModal value={this.state.cancel} onPress={() => this._Cancel()}/>
                            </View>

                        </View>

                    </Modal>
                    <FlatListPersonal/>
                    <FloatButton
                        onPress={() => {
                        this._openAddModal()
                    }}/>
                </View>
            </View>
        );
    }
}

// Note Personal

class FloatButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.floatButton}>
                <Text style={styles.txtFloatButton}>+</Text>
            </TouchableOpacity>
        );
    }
}

class BtnUpload extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.btnUpload} onPress ={this.props.onPress}>
                <Image
                    style={{
                    alignSelf: 'center'
                }}
                    source={require('../source/images/icon/ic_cam.png')}/>
            </TouchableOpacity>
        );
    }
}
class BtnEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: require('../source/images/icon/ic_edt.png')
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress} style={styles.btnUpImage}>
                    <Image style={styles.icUp} source={this.state.edit}/>
                </TouchableOpacity>
            </View>
        );
    }
}

class _TextInput extends React.Component {
    render() {
        return (
            <View style={styles.lineModal}>
                <Text style={styles.titleModal}>{this.props.title}
                </Text>
                <TextInput
                    style={styles.txtModal}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.value}
                    value={this.props.text}/>

            </View>
        );
    }
}

class _btnModal extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={{
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

let name;
let detail;

class LineModal extends React.Component {
    render() {
        return (
            <View
                style={{
                flexDirection: 'column',
                alignSelf: 'center',
                zIndex: 1000
            }}>
                <Text style={styles.txtAddModel}>
                    {this.props.value}
                </Text>
                <EdtModal
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}/>
            </View>
        );
    }
}
class EdtModal extends React.Component {
    render() {
        return (<TextInput
            style={styles.edtModal}
            placeholderTextColor="white"
            placeholder={this.props.placeholder}
            underlineColorAndroid='transparent'
            onChangeText={this.props.onChangeText}/>);
    }
}
class BtnModal extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.btnModalAdd} onPress={this.props.onPress}>
                <Text
                    style={{
                    fontSize: 18,
                    color: 'white',
                    fontWeight: 'bold',
                    alignSelf: 'center'
                }}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}
const {width, height} = Dimensions.get('window');
const heightOfCover = '30%';
const mainColor = '#FFCF1C';
const styles = StyleSheet.create({
    containerFlatList: {},
    floatButton: {
        position: 'absolute',
        zIndex: 99,
        right: 20,
        bottom: 10,
        backgroundColor: mainColor,
        width: 50,
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    txtFloatButton: {
        color: 'white',
        fontSize: 20
    },
    txtAddModel: {
        fontSize: 18,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10
    },
    btnModalAdd: {
        // backgroundColor:'pink',
        margin: 20,
        height: 40,
        width: 80,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        justifyContent: 'center'
    },
    VbtnModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width - 150,
        alignSelf: 'center'
    },
    containerModalAdd: {
        justifyContent: 'center',
        backgroundColor: mainColor,
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 10,
        flex: 1,
        height: '50%'
    },
    edtModal: {
        // backgroundColor: 'blue,
        width: width - 150,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10
    },
    btnUpload: {
        width: width - 120,
        height: 50,
        // backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerUser: {
        height: height,
        // backgroundColor: 'red',
        width: width,
        flex: 1
    },
    brCover: {
        width: width,
        height: heightOfCover,
        justifyContent: 'flex-end'
    },
    brAvt: {
        height: '50%',
        justifyContent: 'flex-end',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 5
    },
    btnUpImage: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        width: 30,
        opacity: 0.8,
        height: 25,
        borderTopLeftRadius: 5,
        alignItems: 'center'
    },
    icUp: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    txtName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    txtDetail: {
        color: 'white'
    },
    modal: {
        flex: 1,
        backgroundColor: mainColor,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    lineModal: {
        flexDirection: 'row',
        justifyContent: 'center',
        // backgroundColor: 'red',
        width: width - 120,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 10,
        borderRadius: 5
    },
    txtModal: {
        alignSelf: 'center',
        fontSize: 20,
        width: '70%',
        marginLeft: 5
    },
    titleModal: {
        alignSelf: 'center',
        width: '20%',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
});