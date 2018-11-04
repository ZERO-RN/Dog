/**
 * Created by zerowolf on 2017/12/6.
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    Animated,
    Dimensions,
    TouchableOpacity
} from 'react-native';
const {width, height}= Dimensions.get('window');
import splash from '../../images/splashbj.png';
import NavigationUtil from '../../utils/NavigationUtil';


export default class Splash extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            header: null,
            headerBackTitle: null,
        }
    );




    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        };
    }

    componentDidMount() {
        Animated.timing(this.state.bounceValue, {
            toValue: 1.2,
            duration: 1000
        }).start();

        this.timer = setTimeout(() => {
            NavigationUtil.reset(this.props.navigation, 'Tab');
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }


    render() {
        //('cover', 'contain', 'stretch', 'repeat', 'center')
        // const {navigator} = this.props.RS_Navigate;
        return (<View style={{flex: 1}}>
            <Image source={splash} style={{flex: 1,width:width,height:height}} resizeMode={'stretch'}>

            </Image>
            <TouchableOpacity
                style={{
                    borderRadius:20,
                    backgroundColor: 'gray', position: 'absolute',
                    padding:5,
                    paddingLeft:10,
                    paddingRight:10,
                    top: 30,
                    right: 30,
                }}
                activeOpacity={0.5}
                onPress={() => {
                    NavigationUtil.reset(this.props.navigation, 'Tab');
                    // this.props.navigation.dispatch({
                    //         type:'Tab'
                    //     })
                }}>

                <Text style={{
                    color: 'white',
                    fontSize: 18,
                }}>
                    跳过
                </Text>
            </TouchableOpacity>
        </View>);
    }

}