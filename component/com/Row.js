import React from 'react'
import { StyleSheet, Dimensions, Platform, Image, View, Text } from 'react-native';
const Row = (props) => (
  <View style={{flex:1, flexDirection: 'row'}}> //Don't forget this
    <Image source={this.props.image}>
      <Text>{this.props.title}</Text> 
    </Image>
  </View>
)

export default Row