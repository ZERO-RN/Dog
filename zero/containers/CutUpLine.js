/**
 *
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class CutUpLine extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={{
                width: this.props.width ? this.props.width : width - 20,
                height: this.props.height ? this.props.height : 1,
            }}>
                <View style={{
                    width: this.props.width ? this.props.width : width - 20,
                    height: this.props.height ? this.props.height : 1,
                    backgroundColor: '#ece9fb',
                }}/>
            </View>
        );
    }
};