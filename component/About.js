import React, {Component} from 'react'

import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native'
import CarouselPager from 'react-native-carousel-pager';
const {height, width}= Dimensions.get('window')

export default class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title:'ABOUT US',
            tam:require('../source/images/tam.jpg'),
            nguyet:require('../source/images/nguyet.jpg'),
            quang:require('../source/images/quang.jpg'),
            quan:require('../source/images/quan.jpg'),
            hung:require('../source/images/hung.jpg'),
            minh:require('../source/images/minh.jpg'),
            kiet:require('../source/images/kiet.jpg'),

            n4:'Nguyễn Đức Thành Tâm',
            n2:'Võ Thị Kim Nguyệt',
            n3:'Trần Vinh Quang',
            n1:'Trần Hồng Quân',
            n5:'Nguyễn Đăng Hùng',
            n6:'Tạ Lê An Kiệt',
            n7:'Hồng Quang Minh'
        }
    }
    render(){
        return(
                <View style={styles.container}>

 
                    <CarouselPager 
                        ref={ref => this.carousel = ref} initialPage={4} 
                        pageStyle={{
                            alignSelf: 'center',
                            height:height*(40/100),
                            backgroundColor: '#fff',
                            borderRadius: 20,}}>
                      
                            <ImageBackground key={'page0'} style={{
                                    flex:1,
                                    borderRadius:20,
                                    backgroundColor:'red'
                                }}
                                source={this.state.tam}
                            >
                                <TouchableOpacity style={{
                                    justifyContent:'center'
                                }}>
                                    <View style={{
                                        height:'95%',
                                        width:'90%',
                                        borderRadius:10,
                                        backgroundColor:'black',
                                        alignSelf:'center',
                                        justifyContent:'center',
                                        opacity:0.4
                                        
                                    }}/>
                                        
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize:24,
                                        alignSelf:'center',
                                        position:'absolute'
                                    }}> 
                                    {this.state.n1}
                                </Text>
                                </TouchableOpacity>
                            </ImageBackground>

                            <ImageBackground
                                key={'page1'}
                                style={{
                                    flex:300,
                                    borderRadius:20,
                                    backgroundColor:'red'
                                }}
                                source={this.state.nguyet}
                            >
                                <TouchableOpacity style={{
                                    justifyContent:'center'
                                }}>
                                    <View style={{
                                        height:'95%',
                                        width:'90%',
                                        borderRadius:10,
                                        backgroundColor:'black',
                                        alignSelf:'center',
                                        justifyContent:'center',
                                        opacity:0.4
                                        
                                    }}/>
                                        
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize:24,
                                        alignSelf:'center',
                                        position:'absolute'
                                    }}> 
                                    {this.state.n2}
                                </Text>
                                </TouchableOpacity>
                            </ImageBackground>

                            <ImageBackground
                                key={'page2'}
                                style={{
                                    flex:300,
                                    borderRadius:20,
                                    backgroundColor:'red'
                                }}
                                source={this.state.quang}
                            >
                                <TouchableOpacity style={{
                                    justifyContent:'center'
                                }}>
                                    <View style={{
                                        height:'95%',
                                        width:'90%',
                                        borderRadius:10,
                                        backgroundColor:'black',
                                        alignSelf:'center',
                                        justifyContent:'center',
                                        opacity:0.4
                                        
                                    }}/>
                                        
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize:24,
                                        alignSelf:'center',
                                        position:'absolute'
                                    }}> 
                                    {this.state.n3}
                                </Text>
                                </TouchableOpacity>
                            </ImageBackground>

                            <ImageBackground
                                key={'page3'}
                                style={{
                                    flex:300,
                                    borderRadius:20,
                                    backgroundColor:'red'
                                }}
                                source={this.state.quan}
                            >
                                <TouchableOpacity style={{
                                    justifyContent:'center'
                                }}>
                                    <View style={{
                                        height:'95%',
                                        width:'90%',
                                        borderRadius:10,
                                        backgroundColor:'black',
                                        alignSelf:'center',
                                        justifyContent:'center',
                                        opacity:0.4
                                        
                                    }}/>
                                        
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize:24,
                                        alignSelf:'center',
                                        position:'absolute'
                                    }}> 
                                    {this.state.n5}
                                </Text>
                                </TouchableOpacity>
                            </ImageBackground>
                            
                            <ImageBackground
                                key={'page4'}
                                style={{
                                    flex:300,
                                    borderRadius:20,
                                    backgroundColor:'red',
                                    justifyContent:'center'
                                }}
                                source={this.state.minh}>

                                <TouchableOpacity style={{
                                    justifyContent:'center'
                                }}>
                                    <View style={{
                                        height:'95%',
                                        width:'90%',
                                        borderRadius:10,
                                        backgroundColor:'black',
                                        alignSelf:'center',
                                        justifyContent:'center',
                                        opacity:0.4
                                        
                                    }}/>
                                        
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize:24,
                                        alignSelf:'center',
                                        position:'absolute'
                                    }}> 
                                    {this.state.n4}
                                </Text>
                                </TouchableOpacity>
                            </ImageBackground>

                            <ImageBackground
                                key={'page5'}
                                style={{
                                    flex:300,
                                    borderRadius:20,
                                    backgroundColor:'red'
                                }}
                                source={this.state.hung}
                            >
                                <TouchableOpacity style={{
                                    justifyContent:'center'
                                }}>
                                    <View style={{
                                        height:'95%',
                                        width:'90%',
                                        borderRadius:10,
                                        backgroundColor:'black',
                                        alignSelf:'center',
                                        justifyContent:'center',
                                        opacity:0.4
                                        
                                    }}/>
                                        
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize:24,
                                        alignSelf:'center',
                                        position:'absolute'
                                    }}> 
                                    {this.state.n6}
                                </Text>
                                </TouchableOpacity>
                            </ImageBackground>

                            <ImageBackground
                                key={'page6'}
                                style={{
                                    flex:300,
                                    borderRadius:20,
                                    backgroundColor:'red'
                                }}
                                source={this.state.kiet}
                            >
                                <TouchableOpacity style={{
                                    justifyContent:'center'
                                }}>
                                    <View style={{
                                        height:'95%',
                                        width:'90%',
                                        borderRadius:10,
                                        backgroundColor:'black',
                                        alignSelf:'center',
                                        justifyContent:'center',
                                        opacity:0.4
                                        
                                    }}/>
                                        
                                <Text
                                    style={{
                                        color:'white',
                                        fontSize:24,
                                        alignSelf:'center',
                                        position:'absolute'
                                    }}> 
                                    {this.state.n7}
                                </Text>
                                </TouchableOpacity>
                            </ImageBackground>
                            
                    </CarouselPager>
                    <View>
                            <Text style={{
                                alignSelf:'center',
                                color:'white',
                                fontSize:18,
                                marginBottom:20
                            }}>
                                FPT Polytechnic - MOB104 AGILE
                            </Text>
                    </View>
                </View>
        );
    }
}


const br='#121A1E'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:br
    }
})