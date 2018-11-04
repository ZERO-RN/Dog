/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image, TextInput,
    ScrollView,
    TouchableOpacity,
    Alert
} from 'react-native';
import s from '../AllStyles';
import CutUpLine from '../CutUpLine';
const {width, height} = Dimensions.get('window');
import  TopView from './Mine_TopView';
import  Item from './Item';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
export default class Mine extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '我的',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <View style={[s.max, {backgroundColor: '#e7e9e9', justifyContent: 'flex-start'}]}>

                <View style={{
                    width: width,
                    height: 200,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor:'transparent'
                }}>
                    {/*<Image source={require('../../images/mine_bj.png')}*/}
                           {/*style={{width: width, height: 200, position: 'absolute'}}/>*/}
                    <LinearGradient
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        locations={[0, 0.6, 1]}
                        colors={['#7c56cd', '#7464da', '#6d6fe6']}
                        style={styles.linearGradient}>

                    </LinearGradient>
                    <Image style={{marginLeft: 10,width:60,height:60}} source={require('../../images/xiaotu01.png')}/>
                    <View style={{marginLeft: 10, flexDirection: 'column',marginBottom:10}}>
                        <Text style={{fontSize: 14, color: 'white'}}>ZEROwolfHwang</Text>
                        <Text style={{fontSize: 14, color: 'white',marginTop:5}}>132******235</Text>
                    </View>
                </View>
                {/*<CutUpLine height={10}/>*/}

                <TouchableOpacity activeOpacity={0.5}
                                  style={{
                                      position: 'absolute', top: 40, right: 20
                                  }}
                                  onPress={() => {
                                      Alert.alert('打开设置界面')
                                  }}>

                    <Icon size={20} name={'md-settings'} style={{color: 'white', backgroundColor: 'transparent'}}/>
                </TouchableOpacity>

                <View style={{
                    width: width - 20, height: height, borderRadius: 5, position: 'absolute',
                    top: 150
                }}>
                    <View style={styles.topView}>
                        <TopView image={require('../../images/qianbao.png')} title={'主人资料'}/>
                        <TopView image={require('../../images/renzheng.png')} title={'宠物资料'}/>
                        <TopView image={require('../../images/ziliao.png')} title={'个人相册'}/>
                    </View>

                    <View style={styles.centerView}>
                        <Item onPress={() => {
                            Alert.alert('点击条目')
                        }}
                              title={'谁看过我'}
                              image={require('../../images/qianbao.png')}
                        />
                        <Item onPress={() => {
                            Alert.alert('点击条目')
                        }}
                              title={'赞过我'}
                              image={require('../../images/qianbao.png')}/>
                        <Item onPress={() => {
                            Alert.alert('点击条目')
                        }}
                              title={'关注我'}
                              image={require('../../images/qianbao.png')}/>
                        <Item onPress={() => {
                            Alert.alert('点击条目')
                        }}
                              line={true}
                              title={'收到的礼物'}
                              image={require('../../images/qianbao.png')}/>

                    </View>

                    <View style={styles.centerView}>
                        <Item onPress={() => {
                            Alert.alert('点击条目')
                        }}
                              title={'珍心会员'}
                              image={require('../../images/qianbao.png')}
                        />
                        <Item onPress={() => {
                            Alert.alert('点击条目')
                        }}
                              title={'会员中心'}
                              image={require('../../images/qianbao.png')}/>
                        <Item onPress={() => {
                            Alert.alert('点击条目')
                        }}
                              title={'星级特权'}
                              image={require('../../images/qianbao.png')}/>
                        <Item onPress={() => {
                            Alert.alert('点击条目')
                        }}
                              line={true}
                              title={'直营门店'}
                              image={require('../../images/qianbao.png')}/>

                    </View>

                </View>


            </View>
        );
    }
}
const styles = {
    linearGradient: {
        width: width,
        height: 200,
        backgroundColor: '#00f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute'
    },
    container: {
        height: 200,
        backgroundColor: '#CCCCCC',
        marginBottom: 10,
    },
    topView: {
        paddingBottom: 15,
        paddingTop: 10,
        width: width - 20,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#d7d9d9',
        shadowOffset: {height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10
    },
    centerView: {
        paddingBottom: 5,
        paddingTop: 5,
        width: width - 20,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#d7d9d9',
        shadowOffset: {height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10
    },
};
