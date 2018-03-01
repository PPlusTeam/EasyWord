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
    TextInput
} from 'react-native';


import RNFetchBlob from 'react-native-fetch-blob';


import {Firebase} from './FireBase';
import TXTinput from './com/TXTinput';
import Line from './com/TXTinput';

const storage = Firebase.storage();
const Blob = RNFetchBlob.polyfill.Blob;
const fs = RNFetchBlob.fs;

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
widown.Blob = Blob;

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
    },
    
};
export default class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brCover: require('../source/images/cover.jpg'),
            brAvt: require('../source/images/avt.jpg'),
            name: 'Rabbit Soup',
            detail: 'Dev in PP Company',
            cacheName: '',
            cacheDetail: '',
            modalVisible: false,
            labelName: 'Tên: ',
            labelDetail: 'Mô tả: ',
            upCover:'Thêm ảnh nền'
        }
    }
    _editInfo() {
        this.setState({modalVisible: true});
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


                uploadImage(response.url).then(url => this.setState({brCover:url}))
                .catch(error => console.log(error))
        
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

                // You can also display the image using data: let source = { uri:
                // 'data:image/jpeg;base64,' + response.data };

                this.setState({brAvt: source});
            }
        });
    }
    _closeModal() {
        this.setState({modalVisible: false})
    }
    _okModal() {
        this.setState({name:this.state.cacheName});
        this.setState({detail:this.state.cacheDetail});
        this.setState({modalVisible: false})
    }

    _cancelModal() {
        this._closeModal();
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {/*Modal*/}
                    <Modal
                        visible={this.state.modalVisible}
                        animationType={"fade"}
                        transparent={true}
                        onRequestClose={() => this._closeModal()}>
                        <View style={styles.modal}>
                            <_TextInput
                            onChangeText={(value)=>this.setState({cacheName:value})}
                            title={this.state.labelName} value={this.state.name}/>
                            <_TextInput 
                            onChangeText={(value)=>this.setState({cacheDetail:value})}
                            
                            title={this.state.labelName} value={this.state.name}/>
                            
                            <BtnUpload 
                            title={this.state.upCover}
                            onPress={()=>{this._uploadCover()}}/>
                            <View
                                style={{
                                flexDirection: 'row',
                                marginTop: 10,
                                justifyContent: 'space-between',
                                width: 170,

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
                                    {this.state.detail}
                                </Text>

                            </View>
                            <BtnEdit
                                onPress={this
                                ._editInfo
                                .bind(this)}/>
                        </ImageBackground>
                    </View>
                    <Text>
                        Thanh Tam
                    </Text>
                </View>
            </ScrollView>
        );
    }
}
class BtnUpload extends React.Component{
    render(){
        return(
            <TouchableOpacity
                style = {styles.btnUpload}
                onPress ={this.props.onPress}
            >
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}
// <ImageBackground style={styles.brAvt} source={this.state.brAvt}> <UploadImage
//     onPress={this     ._uploadAvt     .bind(this)}/> </ImageBackground>
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
                    placeholder={this.props.value}/>

            </View>
        );
    }
}

class _btnModal extends React.Component {
    render() {
        return (
            <TouchableOpacity
                style={{
                backgroundColor: 'red',
                height: 40,
                width: 70,
                borderRadius: 20,
                justifyContent: 'center'
            }}
                onPress={this.props.onPress}>
                <Text
                    style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    fontWeight: 'bold'
                }}>
                    {this.props.label}
                </Text>
            </TouchableOpacity>
        );
    }
}

const {width, height} = Dimensions.get('window');
const heightOfCover = '30%';
const mainColor = '#FAC40D';
const styles = StyleSheet.create({
    btnUpload:{
      width:width -120,
      height:50,
      backgroundColor:'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerUser: {
        height: height,
        backgroundColor: 'red',
        width: width
    },
    brCover: {
        width: width,
        height: heightOfCover,
        justifyContent: 'flex-end'
    },
    brAvt: {
        width: '30%',
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
        backgroundColor: 'red',
        width: width - 120
    },
    txtModal: {
        alignSelf: 'center',
        fontSize: 20,
        width: '70%'
    },
    titleModal: {
        alignSelf: 'center',
        width: '20%',
        fontSize: 20
    }
});