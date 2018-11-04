/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';
import Home from '../containers/home/Home';
import Pair from '../containers/pair/Pair';
import ChongQuan from '../containers/chongquan/ChongQuan';
import Tio_im from '../containers/chat/Tio_im';
import ChatRoom from '../containers/chat/ChatRoom';
import Heart from '../containers/chongquan/heart/Heart';
import Mine from '../containers/mine/Mine';
import Home_One from '../containers/home/Home_One';
import Splash from '../containers/splash/Splash';
import SignPage from '../containers/signPage/SignPage';



import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// import Icon from 'react-native-vector-icons/FontAwesome';


//侧滑菜单的页面
import Wallet from "../containers/drawer/Wallet";
import CardCoupons from "../containers/drawer/CardCoupons";
import Invite from "../containers/drawer/Invite";

const AppNavigator = TabNavigator({

    Tio_im: {
        screen: Tio_im, navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-home-outline" size={25} color={tintColor}/>

            )
        }
    },
    Home: {
        screen: Home, navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-home-outline" size={25} color={tintColor}/>

            )
        }
    },
    Pair: {
        screen: Pair, navigationOptions: {
            tabBarLabel: '附近',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="ios-disc-outline" size={25} color={tintColor}/>
            )
        }
    },
    ChongQuan: {
        screen: ChongQuan, navigationOptions: {
            tabBarLabel: '配对',
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons name="pets" size={25} color={tintColor}/>
            )
        }
    },
    Mine: {
        screen: Mine, navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Icon name="md-person" size={25} color={tintColor}/>
            )
        },
    }
}, {
    tabBarPosition: 'bottom',
    lazy: true, // 是否懒加载,
    swipeEnabled: false,
    initialRouteName: 'Home',
    tabBarOptions: {
        showIcon: true,
        pressOpacity: 0.8,
        activeTintColor: '#6e63e6', // 文字和图片选中颜色
        inactiveTintColor: '#686868', // 文字和图片默认颜色
        style: {
            height: 55,
            backgroundColor: 'white',
            zIndex: 0,
            position: 'relative',
            paddingLeft:20,
            paddingRight:20,
        },

        labelStyle: {
            fontSize: 12,
            paddingVertical: 0,
            marginTop: Platform.OS === 'android' ? 0 : 16
        },
        iconSize: 80,
        iconStyle: {
            marginTop: -3,
        },
        tabStyle: {
            // backgroundColor: 'rgb(230,69,51)',
            backgroundColor: 'white',
        },
        indicatorStyle: {
            height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        },
    }
});
//StackNavigator
export const Navigator = StackNavigator(
    {
        Pair:{screen:AppNavigator,path:Pair},
        Tab: {screen: AppNavigator},
        Sign:{screen:SignPage},
        Splash:{screen:Splash},
        Heart: {screen: Heart},
        Home_One: {screen: Home_One},
        ChatRoom: {screen: ChatRoom},
    },
);
