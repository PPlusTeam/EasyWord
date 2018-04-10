import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  BoxShadow,
  ToastAndroid
} from 'react-native';
import {TabNavigator} from 'react-navigation';
// import {BoxShadow} from 'react-native-shadow';

export default class Program extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: 'Không thể hấp dẫn hơn được',
      src1: require('../../source/images/icon/headerun.png'),
      ic1: require('../../source/images/icon/ic_coin.png'),
      ic2: require('../../source/images/icon/ic_diamond.png'),
      csrc: false,
      txtCoin: "1.000 E.P",
      txtDiamond: 'Free "Salad cá ngừ"',
      txtDate: 'Còn lại 35 ngày',
      dir: '600m'
    };
  }
  _pressIconHeart() {
    console.log("press");
    if (this.state.csrc == false) {
      this.setState({src1: require('../../source/images/icon/headerChoose.png')});
      this.setState({csrc: true})
    } else {
      this.setState({src1: require('../../source/images/icon/headerun.png')});
      this.setState({csrc: false})
    }
    ToastAndroid.show('Liked', ToastAndroid.SHORT)
  }
  render() {
    return (

      <View style={styles.container}>
        <ImageBackground style={styles.background} source={this.props.srcBR}>
          <Image style={styles.logoPizza} source={this.props.logo}/>
          <View
            style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            paddingLeft: 10,
            paddingRight: 10
          }}>
            <View style={styles.view2}>
              <Text numberOfLines ={1} style={styles.text1}>
                {this.props.title}
              </Text>
              <TouchableOpacity
                onPress={() => {
                this._pressIconHeart()
              }}>
                <Image source={this.state.src1} style={styles.iconHeart}/>
              </TouchableOpacity>
            </View>
            <View style={styles.view4}>
              <Image style={styles.icDirec} source={this.props.icPlace}/>
              <Text style={styles.text}>{this.props.txt4}</Text>
            </View>
            <View style={styles.view3}>
              <View style={styles.view5}>
                <Image style={styles.icCoin} source={this.state.ic1}/>
                <Text style={styles.text}>{this.props.txt1}</Text>
                <Image style={styles.icCoin2} source={this.state.ic2}/>
                <Text style={styles.text}>{this.props.txt2}</Text>
              </View>
              <Text style={styles.date}>{this.props.txt3}</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.container2}>
          <Text style={styles.title2}>{this.props.titles2}
            <Text style={styles.context2}>{this.props.context2}</Text>
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 280,
    width: undefined,
    marginTop: 7,
    // backgroundColor: 'red'

  },
  container2: {
    backgroundColor: 'white',
    height: 70,
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    top: -10
  },
  background: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  view2: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
  view3: {
    flexDirection: 'row',
    marginBottom: 10,
    // backgroundColor: 'yellow',
    justifyContent: 'space-between'
  },
  view4: {
    // backgroundColor: 'yellow',
    flexDirection: 'row'
  },
  view5: {
    // backgroundColor: 'pink',
    flexDirection: 'row'
  },
  title2: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  context2: {
    fontWeight: 'normal'
  },
  text1: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 22,
    width: '90%'
  },
  text: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16
  },
  date: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 16
  },
  logoPizza: {
    position: 'absolute',
    height: 70,
    width: 70,
    alignSelf: 'center',
    // backgroundColor: 'yellow',
    marginTop: 20
  },
  iconHeart: {
    height: 35,
    width: 35,
    // backgroundColor:'red'
  },
  icCoin: {
    height: 30,
    width: 30,
    alignSelf: 'center'
  },
  icDirec: {
    height: 30,
    width: 30
  },
  icCoin2: {
    height: 40,
    width: 40,
    alignSelf: 'center'
  }
});