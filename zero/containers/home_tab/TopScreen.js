'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
//var ViewPager = require('./ViewPager');
var deviceWidth = Dimensions.get('window').width;
const {width, height}= Dimensions.get('window');
import image from '../../images/image66.png';
// var IMGS = [
//     image,
//     image,
//     image,
//     image,
//     image,
// ];

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class TopScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleSwiper: false
        };
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                visibleSwiper: true
            });
        }, 100);

    }
    render() {
        let swiper = null;
        let IMGS = [
            'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
            'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
            'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
            'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
            'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
        ];
        if (this.state.visibleSwiper) {
            swiper = <Swiper dotColor={'white'}
                             activeDotColor={'#FF0A0A'}
                             height={150} horizontal={true}
                             loop={false} bounces={true}
                             // removeClippedSubviews={false}
            >
                <View style={styles.slide}>
                    <Image resizeMode='cover' style={styles.image} source={require('../../images/dog1.png')} />
                </View>
                <View style={styles.slide}>
                    {/*<Image resizeMode='cover' style={styles.image} source={{url:IMGS[0]}} />*/}
                    <Image resizeMode='cover' style={styles.image} source={{uri:'http://himg2.huanqiu.com/attachment2010/2017/1205/08/51/20171205085117810.jpg'}} />
                </View>
                <View style={styles.slide}>
                    {/*<Image resizeMode='cover' style={styles.image} source={{url:IMGS[0]}} />*/}
                    <Image resizeMode='cover' style={styles.image} source={{uri:this.props.recommend.data[0].img}} />
                </View>

                <View style={styles.slide}>
                    {/*<Image resizeMode='cover' style={styles.image} source={{url:IMGS[0]}} />*/}
                    <Image resizeMode='cover' style={styles.image} source={{uri:'http://www.sdklty.com/d/file/2015/11/27/2123f7686d354b4d1b67b99a7f657747.jpg'}} />
                </View><View style={styles.slide}>
                    {/*<Image resizeMode='cover' style={styles.image} source={{url:IMGS[0]}} />*/}
                    <Image resizeMode='cover' style={styles.image} source={{uri:'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024'}} />
                </View>
            </Swiper>;
        } else {
            swiper = <View></View>;
        }
        return (
        <View style={{height:150}}>
            {swiper}
            {/*<Swiper style={styles.wrapper} height={120}
                    onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
                    dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                    paginationStyle={{
                        bottom: -23, left: null, right: 10
                    }} loop>
                <View style={styles.slide} title={<Text style={{color:'red'}} numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={{uri:this.props.recommend.data[0].img}} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={{uri:this.props.recommend.data[1].img}} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={{uri:this.props.recommend.data[2].img}} />
                </View>
                <View style={styles.slide} title={<Text numberOfLines={1}>Learn from Kim K to land that job</Text>}>
                    <Image resizeMode='stretch' style={styles.image} source={require('../../images/dog1.png')} />
                </View>
            </Swiper>*/}
        </View>
        )
    }


    _renderPage(data: Object,
                pageID: number | string,) {
        return (
            <Image
                source={{uri: data, cache: 'force-cache'} }
                style={styles.page}/>
        );
    }

}
const styles = {
    container: {
        flex: 1
    },

    wrapper: {
    },

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
        width,
        flex: 1
    }
}
const mapStateToProps = (state) => {
    return {
        RS_Recommend_LIST: state.RS_Recommend_LIST.data,
    }

};

export default connect(mapStateToProps)(TopScreen);
