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
      csrc: false,
      txtCoin: "1.000 E.P"
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
          <View style={styles.view2}>
            <Text>
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
            <Image
              style={styles.icCoin}
              source={require('../source/images/icon/ic_coin.png')}/>
            <Text>{this.state.txtCoin}</Text>
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
    width: undefined,
  },
  view2: {
    flexDirection: 'row'
  },
  view3: {
    flexDirection: 'row'
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
    width: 35
  },
  icCoin: {
    height: 30,
    width: 30
  }
});