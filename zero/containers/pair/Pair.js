import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    WebView,
    Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
const url = Platform.select({
    ios: 'http://127.0.0.1:63342/Dog/zero/html/TestDemo.html',
    // ios: 'http://127.0.0.1:63342/Dog/zero/html/nearby.html',
    // android: 'http://127.0.0.1:63342/Dog/zero/html/nearby.html',
    // android: 'http://192.168.43.108:63342/Dog/zero/html/nearby.html',
    // android: 'http://10.0.0.2:8081/Dog/zero/html/nearby.html',
    // ios: 'file:///../html/nearby.html',

    // android: 'file:///android_asset/web/nearby.html',


    // ios: 'http://127.0.0.1:63342/Dog/zero/socket/Socket.html',
    // ios: 'file:///../html/nearby.html',
    android: 'file:///android_asset/web/index1.html',





    // android: 'file:///android_asset/web/nearby.html',

});
import TWebview from './twebview';
export default class Pair extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '还款',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{flex: 1}}>
                {/*<TWebview url={url}/>*/}
                {/*<WebView source={{uri:'http://10.0.2.2/FirstNode/public/nearby.html'}}/>*/}
                <WebView source={{uri:url}}/>

            </View>
        );
    }
}

