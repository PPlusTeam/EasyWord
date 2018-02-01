import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import ItemPartyAround from './ItemPartyAround';
import HeaderPanel from './HeaderPanel';

export default class PartyAround extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            title: "- PARTY AROUND -",

            ai1: require('../../source/images/i1.jpg'),
            ni1: 'Kamint Raze',
            numi1: '36/45',

            ai2: require('../../source/images/i2.jpg'),
            ni2: 'NeTea S',
            numi2: '05/06',

            ai3: require('../../source/images/i3.jpg'),
            ni3: 'Mint Choi',
            numi3: '12/15',

            ai4: require('../../source/images/i4.jpg'),
            ni4: 'Kant Rose',
            numi4: '01/06',

            ai5: require('../../source/images/i1.jpg'),
            ni5: 'Kamint Raze',
            numi5: '36/45',

            ai6: require('../../source/images/i6.jpg'),
            ni6: 'Enazi Kar',
            numi6: '05/06',

            ai7: require('../../source/images/i7.jpg'),
            ni7: 'Rinka Jee',
            numi7: '12/05',

            ai8: require('../../source/images/i8.jpg'),
            ni8: 'Kant Rose',
            numi8: '01/06'
        };
    }
    render() {

        return (
            <View>
                <HeaderPanel title={this.state.title}/>
                <View style={styles.boxContainer}>
                    <View style={styles.row1}>
                        <ItemPartyAround
                            avt={this.state.ai1}
                            name={this.state.ni1}
                            number={this.state.numi1}/>
                        <ItemPartyAround
                            avt={this.state.ai2}
                            name={this.state.ni2}
                            number={this.state.numi2}/>
                        <ItemPartyAround
                            avt={this.state.ai3}
                            name={this.state.ni3}
                            number={this.state.numi3}/>
                        <ItemPartyAround
                            avt={this.state.ai4}
                            name={this.state.ni4}
                            number={this.state.numi4}/>

                    </View>
                    <View style={styles.row2}>
                        <ItemPartyAround
                            avt={this.state.ai5}
                            name={this.state.ni5}
                            number={this.state.numi5}/>
                        <ItemPartyAround
                            avt={this.state.ai6}
                            name={this.state.ni6}
                            number={this.state.numi6}/>
                        <ItemPartyAround
                            avt={this.state.ai7}
                            name={this.state.ni7}
                            number={this.state.numi7}/>
                        <ItemPartyAround
                            avt={this.state.ai8}
                            name={this.state.ni8}
                            number={this.state.numi8}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    boxContainer: {
        flexDirection: 'column',
        backgroundColor:'white',
        justifyContent: 'center',
    },
   
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'pink',
        padding: 5
    },row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:'pink',
        padding: 5
    }
});