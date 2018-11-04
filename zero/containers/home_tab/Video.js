/**
 * Created by zerowolf on 2017/12/25.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    ScrollView,
    RefreshControl,
    ActivityIndicator
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import FetchUtils from '../../utils/FetchUtils';
class Video extends Component {
    constructor(props) {
        super(props);

        //默认不显示 ScrollView
        this.state = {
            isShow: false,
            refreshing: true
        }

    }

    componentWillMount() {
        console.log('Video');

        let url = 'http://localhost:3000/data/read?type=it';
        FetchUtils.ajax(url, (data) => {
                console.log(data);
            },
            (err) => {

            })

    }

    //下拉刷新
    _onRefresh() {
        var that = this;
        that.setState({refreshing: true});
        setTimeout(function () {
            let url = 'http://localhost:3000/data/read?type=it';
            FetchUtils.ajax(url, (data) => {
                    console.log(+ data);
                },
                (err) => {
                    Alert.alert('err');
                })
        }, 3000)

    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'blue', fontSize: 18}} onPress={()=>this.props.navigation.dispatch({
                    type:'Home_One'
                })}>
                    New Page !
                </Text>
            </View>
        )
    }
}
          /*  this.state.isShow?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView
                    style={{flex: 1}}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            title="数据在加载中..."
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }>
                    <Text style={{height: 30}}>'24512565456121322223221safdsfasdwsdfsd'</Text>
                </ScrollView >
            </View>
                :
                <ActivityIndicator
                    animating={true}
                    style={[{height: 80}]}
                    size="large"
                />*/
const mapStateToProps = (state) => {
    return {
        navigation: state.navigation.data,
    };
};



export default connect(mapStateToProps)(Video);