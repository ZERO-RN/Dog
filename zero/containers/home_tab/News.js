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
    ActivityIndicator,
    RefreshControl
} from 'react-native';

import FetchUtils from '../../utils/FetchUtils';
export default class News extends Component {
    constructor() {
        super();
        //默认不显示 ScrollView
        this.state = {
            isShow: false,
            refreshing: false
        }
    }

    //下拉刷新
    _onRefresh() {
        var that = this;
        that.setState({refreshing: true});
        setTimeout(function () {
            that._fetchData();
        }, 3000)

    }

    _fetchData(callback) {
        var that = this;
        var url = "http://localhost:3000/data/read?type=it";

        FetchUtils.ajax(url, (data) => {
            if (data.status === 1) {
                let obj = data.data;
                that.setState({
                    isShow: true,
                    other: obj.other,
                    refreshing: false
                });
            } else {
                alert('服务异常,正在紧急修复,请耐心等待1');
            }
        }, (err) => {
            alert('服务异常,正在紧急修复,请耐心等待2');
        })
    }


    componentWillMount() {
        console.log('News');
    }

    render() {
        return (
            this.state.isShow ?
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
                :
                <ActivityIndicator
                    animating={true}
                    style={[{height: 80}]}
                    size="large"
                />

        );
    }
}