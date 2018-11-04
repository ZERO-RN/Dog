/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React, {Component, PropTypes} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    Button,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import SizeUtil from '../utils/SizeUtil';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import s from '../containers/AllStyles';
const Options = (navigation, title, leftView, rightView, rightIcon) => ({

    //设置滑动返回的距离
    gestureResponseDistance: {horizontal: 300},

    //是否开启手势滑动返回，android 默认关闭 ios打开
    gesturesEnabled: false,

    //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
    // headerBackTitle: '123',
    //导航栏的样式
    header: <LinearGradient
        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
        locations={[0, 0.6, 1]}
        colors={['#a353cd', '#7464da', '#6d6fe6']}
        style={styles.linearGradient}>
        <View/>
        <Text style={{
            fontSize: 18,
            color: 'white',
            marginTop:12,
            backgroundColor:'transparent',
        }}>{title}</Text>

        {leftView?leftView:<TouchableOpacity activeOpacity={0.5}
                                                           style={{position: 'absolute', top: 15, left: 15,padding:5}}
                                                           onPress={() => {
                                                               navigation.goBack();
                                                           }}>
            <Icon size={30} name={'angle-left'}
                  style={{ color: 'white',backgroundColor:'transparent'}}/>

        </TouchableOpacity>}

        {rightView?rightView:<TouchableOpacity activeOpacity={0.5}
                                                             style={{position: 'absolute', top: 15, right: 15,padding:5}}
                                                             onPress={() => {
                                                                 Alert.alert('更多')
                                                             }}>
            <Ionicons size={30} name={rightIcon?rightIcon:'md-more'}
                      style={{ color: 'white',backgroundColor:'transparent'}}/>

        </TouchableOpacity>}
    </LinearGradient>,
});

const styles = StyleSheet.create({
    linearGradient: {
        width: SizeUtil.width,
        height: 60,
        backgroundColor: '#00f',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedText: {
        color: 'grey',
        fontSize: 14,
    }
});
export default {
    Options
} ;