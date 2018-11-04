/**
 * Created by zerowolf on 2018/1/12.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    TouchableOpacity,
    Image
} from 'react-native';
import SizeUtil from '../../../utils/SizeUtil';
import OptionsUtil from '../../../utils/OptionsUtil';
import MyTabView from '../../../view/MyTabView';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Heart extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '心动',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        that = this;
        that.state = {
            visibleSwiper: false,
            index: 0
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visibleSwiper: true,
            });
        }, 500);
    }

    _onMomentumScrollEnd(e, state, context) {
        // console.log(state, context.state)
        // console.log(state, context.state.index)
        console.log(state.index);
        that.setState({
            index: state.index
        })
    }

    render() {
        let swiper = null;
        if (this.state.visibleSwiper) {
            swiper = <Swiper dotColor={'white'}
                // showsButtons
                             showsPagination={true}
                             activeDotColor={'#FF0A0A'}
                             height={200} horizontal={true}
                             loop={false} bounces={false}
                             onMomentumScrollEnd={this._onMomentumScrollEnd}
                // removeClippedSubviews={false}
            >

                <View style={styles.slide1}>

                    {/*<Image resizeMode='cover' style={styles.image} source={{url:IMGS[0]}} />*/}
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>


                <View style={styles.slide1}>
                    <Text style={styles.text}>Beautiful</Text>
                    {/*<Image resizeMode='cover' style={styles.image} source={require('../../images/dog1.png')} />*/}
                </View>
                <View style={styles.slide1}>
                    {/*<Image resizeMode='cover' style={styles.image} source={{url:IMGS[0]}} />*/}
                    <Text style={styles.text}>And simple</Text>
                </View><View style={styles.slide}>
                {/*<Image resizeMode='cover' style={styles.image} source={{url:IMGS[0]}} />*/}
                <Image resizeMode='cover' style={styles.image}
                       source={{uri: 'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024'}}/>
            </View>

                <View style={styles.slide}>
                    {/*<Image resizeMode='cover' style={styles.image} source={{url:IMGS[0]}} />*/}
                    <Image resizeMode='cover' style={styles.image}
                           source={{uri: 'http://himg2.huanqiu.com/attachment2010/2017/1205/08/51/20171205085117810.jpg'}}/>
                </View>

            </Swiper>;
        } else {
            swiper = <View></View>;
        }
        return (
            <View style={{flex: 1, backgroundColor: '#f5f3fa'}}>
                <MyTabView title='心动' navigation={this.props.navigation}/>

                <Text style={{
                    fontSize: 18,
                    color: 'grey',
                    marginTop: 25,
                    marginBottom: 20,
                    alignSelf: 'center'
                }}>匹配指数+{that.state.index}</Text>

                <Image style={{width: SizeUtil.width, height: 150}} source={require('../../../images/heart1.png')}/>

                <View style={{
                    width: SizeUtil.width - 80,
                    height: 100,
                    marginTop: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}>

                    <Text style={{color: 'red', fontSize: 24}} onPress={() => {
                        Alert.alert('444');
                        this.props.navigation.dispatch({
                            type: 'Home_One'
                        })
                    }}>
                        恭喜!
                    </Text>
                    <Text style={{color: 'grey', fontSize: 18}}>
                        最佳健康情侣非你们莫属
                    </Text>


                </View>

                <View style={{
                    flex: 1, justifyContent: 'space-between', alignItems: 'center',
                    marginTop: 40, flexDirection: 'row', marginBottom: 40
                }}>
                    <View style={[styles.white, {marginRight: 20}]}/>
                    {swiper}
                    <View style={[styles.white, {marginLeft: 20}]}/>
                </View>

            </View>

        );
    }
}
;

const styles = StyleSheet.create({
    white: {
        backgroundColor: 'white',
        height: 150,
        width: 40
    },
    page: {
        width: SizeUtil.width,
    },


    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ff4f67'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width: SizeUtil.width,
        flex: 1
    }

});
const mapStateToProps = (state) => {
    return {
        navigation: state.chongquan_navigation
    }

};


export default connect(mapStateToProps)(Heart);