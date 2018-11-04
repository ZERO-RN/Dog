/**
 * Created by zerowolf on 2018/1/3.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
// const {width, height}= Dimensions.get('window');
import SizeUtil from '../../utils/SizeUtil';
import NavigationUtil from '../../utils/NavigationUtil';
import ToastUtil from '../../utils/ToastUtil';
import MyTextInput from '../../component/MyTextInput';

export default class SignPage extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        let s = '123';
        console.log(s);
        var  list = [1,2,3,4,5,6]
        for (let obj in list) {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*头像*/}
                <Image style={{width: SizeUtil.width, height: SizeUtil.height, position: 'absolute'}}
                       resizeMode={'stretch'} source={require('../../images/loginbg.png')}/>


                <Image style={styles.pic}
                       source={require('../../images/xiaotu02.png')}>
                </Image>
                {/*账号密码*/}
                <MyTextInput placeholder={'请输入手机号或配配ID'}
                             onChangeText={(text) => this.setState({username: text})}
                />

                <MyTextInput placeholder={'请输入密码'}
                             marginTop={6}
                             onChangeText={(text) => this.setState({password: text})}
                />

                <TouchableOpacity activeOpacity={0.5}
                                  style={styles.loginBtnStyle}
                                  onPress={() => {
                                      // if (this.state.username === 'admin' && this.state.password === '123456') {
                                          NavigationUtil.reset(this.props.navigation, 'Splash');
                                      // } else {
                                      //     ToastUtil.showShort('密码或账号错误', true);
                                      // }

                                  }}>

                    <Text style={{color: 'white'}}>登录</Text>
                </TouchableOpacity>
                {/*设置*/}
                <View style={styles.settingStyle}>
                    <Text style={{color: '#ae39e6'}}>忘记密码</Text>
                    <Text style={{color: '#ae39e6'}}>新用户</Text>
                </View>

                <View style={{
                    width: SizeUtil.width,
                    top: 120,
                    position: 'relative',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                    <Text style={{color: 'grey'}}>选择其它方式登录</Text>

                    <View style={{
                        width: SizeUtil.width - 100,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>


                        <Image style={styles.picImg}
                               source={require('../../images/QQ.png')}/>
                        <Image style={styles.picImg}
                               source={require('../../images/weixin.png')}/>
                        <Image style={styles.picImg}
                               source={require('../../images/weibo.png')}/>

                    </View>

                </View>
            </View>
        );
    }
};
const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#dddddd',
            alignItems: 'center',
        },
        pic: {
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 4,
            borderColor: 'white',
            marginTop: 50,
            marginBottom: 30,
        },
        picImg: {
            width: 60,
            height: 60,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#ae39e6',
            marginTop: 10,
        },
        username: {},
        password: {},
        textInputStyle: {
            borderRadius: 20,
            width: SizeUtil.width - 20,
            height: 44,
            backgroundColor: 'white',
            marginBottom: 1,
            textAlign: 'center',
        },
        loginBtnStyle: {
            borderRadius: 20,
            height: 44,
            width: SizeUtil.width - 40,
            backgroundColor: '#ae39e6',
            marginTop: 30,
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
        }
        ,
        settingStyle: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: SizeUtil.width - 40,

        }
        ,
        otherLoginStyle: {
            // backgroundColor:'red',
            flexDirection: 'row',
            alignItems: 'center',

            //绝对定位
            position: 'absolute',
            bottom: 10,
            left: 20,

        }
        ,
        img: {
            width: 40,
            height: 30,
            marginLeft: 5,
        }
    })
;