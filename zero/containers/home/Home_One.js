/**
 * Created by zerowolf on 2017/12/8.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    WebView,
    Alert,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import OptionsUtil from '../../utils/OptionsUtil'
class Home_One extends Component {

    static navigationOptions = ({navigation}) =>
        OptionsUtil.Options(navigation,'123');

    constructor(props) {
        super(props);

    }

    render() {

        return (
           <WebView source={{url:this.props.url}}/>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        url: state.RS_Nav.data,
    }

};

export default connect(mapStateToProps)(Home_One);

