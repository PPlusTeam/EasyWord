import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import {TabNavigator} from 'react-navigation';

export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: 'Không thể hấp dẫn hơn được',
      src1: require('../source/images/icon/headerun.png'),
      ic1: require('../source/images/icon/ic_coin.png'),
      ic2: require('../source/images/icon/ic_diamond.png'),
      csrc: false,
      txtCoin: "1.000 E.P",
      txtDiamond: 'Free "Salad cá ngừ"',
      txtDate: 'Còn lại 35 ngày'
    };
  }
  _pressIconHeart() {
    console.log("press");
    if (this.state.csrc == false) {
      this.setState({src1: require('../source/images/icon/headerChoose.png')});
      this.setState({csrc: true})
    } else {
      this.setState({src1: require('../source/images/icon/headerun.png')});
      this.setState({csrc: false})
    }
  }
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require('../source/images/pizza.png')}>
          <Image
            style={styles.logoPizza}
            source={require('../source/images/logo_pizzahut.png')}/>
          <View style={{
            backgroundColor: 'red',
            position:'absolute',
            bottom:0,
            alignSelf:'center'
          }}>
            <View style={styles.view2}>
              <Text style={styles.text1}>
                {this.state.text1}
              </Text>
              <TouchableOpacity
                onPress={() => {
                this._pressIconHeart()
              }}>
                <Image source={this.state.src1} style={styles.iconHeart}/>
              </TouchableOpacity>
            </View>
            <View style={styles.view3}>
              <View style={styles.view4}>
                <Image style={styles.icCoin} source={this.state.ic1}/>
                <Text style={styles.text}>{this.state.txtCoin}</Text>
                <Image style={styles.icCoin2} source={this.state.ic2}/>
                <Text style={styles.text}>{this.state.txtDiamond}</Text>
              </View>
              <Text style={styles.text}>{this.state.txtDate}</Text>
            </View>

          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    top: 100,
    height: 200,
    width: null,
    backgroundColor: 'red'
  },
  background: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  view2: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-between',
  },
  view3: {
    flexDirection: 'row',
    backgroundColor: 'yellow',
    marginLeft:20,
    

  },
  view4:{
    backgroundColor: 'pink',
    paddingLeft:10,
    flexDirection: 'row',
  },

  text1: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 22
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 19
  },
  logoPizza: {
    position: 'relative',
    height: 70,
    width: 70,
    alignSelf: 'center',
    backgroundColor: 'yellow'
  },
  iconHeart: {
    height: 35,
    width: 35,
    alignSelf: 'center'
  },
  icCoin: {
    height: 30,
    width: 30,
    alignSelf: 'center'
  },
  icCoin2: {
    height: 40,
    width: 40,
    alignSelf: 'center'
  }
});