import React, {Component} from 'react'
import TXTinput from './com/TXTinput'


import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    KeyboardAvoidingView,
    ToastAndroid
} from 'react-native'
import {Firebase} from './FireBase';

export default class Contact extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            email:'Email ...',
            name:'Name ....',
            message:'Message ....',
            ok:'Submit',
            cancel:'Cancel',
            back:'Back',
            mback:'<',
            mEmail:'',
            mName:'',
            mMessage:''
        }
        this.itemRef = Firebase
            .database()
            .ref("FeedBack");
    }
    _upLoad(){
        if(this.state.mEmail != '' & this.state.mName != '' & this.state.mMessage != ''){
            this
            .itemRef
            .push({Email:this.state.mEmail, Name: this.state.mName, Message: this.state.mMessage})

            ToastAndroid.show('Cảm ơn bạn đã đóng góp', ToastAndroid.SHORT)
        }else{
            ToastAndroid.show('Vui lòng điền đầy đủ thông tin',ToastAndroid.SHORT)
        }
        
    }
    _cancel(){
        this.textInput.clear()

        this.setState({
            mEmail:''
        })
        this.setState({
            mName:''
        })
        this.setState({
            mMessage:''
        })
    }
    render(){
        return(
            <View style ={styles.container}>
                    
                
                <View
                    style={styles.viewForm}>
                    <EdtForm
                        onChangeText={(value)=>this.setState({mEmail:value})}
                        placeholder={this.state.email}
                    />
                    <EdtForm
                        onChangeText={(value)=>this.setState({mName:value})}
                        placeholder={this.state.name}
                    />
                    <TextErea
                        placeholder={this.state.message}
                        onChangeText={(value)=>this.setState({mMessage:value})}
                    />
                </View>
                {/* View Button */}
                <View style={{
                    alignSelf: 'center',
                }}>
                    <TouchableOpacity 
                        onPress = {()=>this._upLoad()}
                        style={styles.buttonSubmit}>
                        <Text style={styles.textButton}>
                            {this.state.ok}
                        </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.buttonCancel}>
                        <Text style={styles.textCancel}>
                            {this.state.cancel}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

class EdtForm extends React.Component{
    render(){
        return(
            <View style={styles.viewInput}>
                <Image
                    style={{
                    height: 20,
                    width: 20,
                    alignSelf: 'center'
                }}
                    source={this.props.SRCimage}/>
                <KeyboardAvoidingView>
                <TextInput
                    style={styles.edtName}
                    blurOnSubmit={true}
                    onSubmitEditing={()=>{this.refs.input.clear()}}
                    ref={input => { this.textInput = input }} 
                    keyboardType={this.props.keyboardType}
                    secureTextEntry={this.props.secureTextEntry}
                    onChangeText={this.props.onChangeText}
                    placeholder={this.props.placeholder}
                    underlineColorAndroid='transparent'/>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

class btn extends React.Component{
    render(){
        return(
            <TouchableOpacity 
                onPress ={this.props.onPress}>
                <Text>{this.props.label}</Text>
            </TouchableOpacity>
        )
    }
}
class TextErea extends React.Component{
    render(){
        return(
            <View style={styles.viewInput}>
            <Image
                style={{
                height: 20,
                width: 20,
                alignSelf: 'center'
            }}
                source={this.props.SRCimage}/>
            <TextInput
                style={styles.textErea}
                keyboardType={this.props.keyboardType}
                    multiline
                    blurOnSubmit={false}
                    maxLength={100}
                secureTextEntry={this.props.secureTextEntry}
                onChangeText={this.props.onChangeText}
                placeholder={this.props.placeholder}
                underlineColorAndroid='transparent'/>
        </View>
        )
    }
}
const {width, height} = Dimensions.get('window')
const mainColor='#FFD200'
const br='#121A1E'
const styles = StyleSheet.create({
    mback:{
        color:'white',
        fontSize:20,
        marginLeft:10,
        marginTop: 10,
    },
    Mback:{
        color:'white',
        textDecorationLine:'underline',
        fontSize:20,
        margin:10
    },
    textCancel:{
        color:'white'
    },
    buttonCancel:{
        width:width-150,
        borderRadius:10,
        marginTop:10,
        marginBottom: 10,
        height:50,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: mainColor,
        justifyContent: 'center',
    },
    textButton:{
        color:'#121A1E',
        fontSize: 24,
    },
    buttonSubmit:{
        width:width-150,
        backgroundColor:mainColor,
        borderRadius:10,
        marginTop:10,
        marginBottom: 10,
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewForm:{
        flexDirection: 'column',
        marginTop:100
    },

    textErea:{
        width: width-150,
        fontSize: 20,
        marginLeft:10,
        color:'black'
    },
    container:{
        flex:1,
        backgroundColor:br,
        justifyContent: 'center',
    },
    viewInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding:width*2.6/187.5,
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft: 20,    
        marginTop:10,
        marginBottom: 10,    
        width:width-60,
        alignSelf: 'center',
    },
    edtName: {
        width: width-150,
        fontSize: 20,
        marginLeft:10,
        color:'black'
    },
    icon:{
        height: 20,
        width: 20,
        alignSelf: 'center'
    }
})