import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';
import PanelHome from './com/PanelHome';
import Panel from './com/Panel';
import PartyAround from './com/PartyAround';
import BonusWithList from './com/BonusWithList';
import HotGift from './com/HotGift';
export default class Party extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brPizza: require('../source/images/pizza.png'),
            brCf: require('../source/images/brCf.jpg'),
            brS: require('../source/images/brSoup.jpg'),

            logoPizza: require('../source/images/logo_pizzahut.png'),
            logoCf: require('../source/images/logo_startbuck.png'),

            icPlace: require('../source/images/icon/ic_direc.png'),

            titlePizza: 'Không thể hấp dẫn hơn đượdawdadadawdadawdc   ',
            title2Pizza: 'Pizza hut',
            context2Pizza: ' - Thả ga ăn pizza mùa mưa cùng bạn bè ngay hôm nay với Pizza Hut...',
            txt1Pizza: '1.000 E.P',
            txt2Pizza: 'Free "Salad cá ngừ',
            txt3Pizza: 'Còn lại 35 ngày',
            txt4Pizza: '600m',

            titleCf: 'Cơ hội trúng iPhone 7 siêu cool',
            title2Cf: 'StartBuck',
            context2Cf: ' - Rủ bạn bè ngay hôm nay : > Thoải mái sang chảnh không lo về giá cả...',
            txt1Cf: '5.000 E.P',
            txt2Cf: 'Giảm giá 30%',
            txt3Cf: 'Còn lại 35',
            txt4Cf: '3.8km',

            titleS: 'Lẩu nấm hấp dẫn mùa mưa',
            title2S: 'Lẩu nấm Cà Rốt',
            context2S: ' - Trời ơi!!! Mưa to như thế thì còn gì hơn một nồi lẩu nấm nóng hổi cùng bạn bè' +
                    ' :>',
            txt1S: '1.000 E.P',
            txt2S: 'Giảm ngay 25%',
            txt3S: 'Còn lại 25',
            txt4S: '2.5km'
        };
    }
    render() {

        return (
            <View style={{
                flex: 1, 
            }}>
                <PanelHome
                    srcBR={this.state.brS}
                    title={this.state.titleS}
                    icPlace={this.state.icPlace}
                    titles2={this.state.title2S}
                    context2={this.state.context2S}
                    txt1={this.state.txt1S}
                    txt2={this.state.txt2S}
                    txt3={this.state.txt3S}
                    txt4={this.state.txt4S}/>

                <PanelHome
                    srcBR={this.state.brCf}
                    logo={this.state.logoCf}
                    title={this.state.titleCf}
                    icPlace={this.state.icPlace}
                    titles2={this.state.title2Cf}
                    context2={this.state.context2Cf}
                    txt1={this.state.txt1Cf}
                    txt2={this.state.txt2Cf}
                    txt3={this.state.txt3Cf}
                    txt4={this.state.txt4Cf}/>
            </View>
        );
    }
}