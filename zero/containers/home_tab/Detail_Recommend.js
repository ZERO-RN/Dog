/**
 * Created by zerowolf on 2017/12/31.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,Alert,
    View,
    Dimensions
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
const {width, height}= Dimensions.get('window');
 class Navigator extends Component{
    constructor(props){
        super(props);

    }

    render(){
       return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'blue', fontSize: 18}}>
                    New Page !
                </Text>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        navigation: state.navigation,
        recommend:state.RS_RECOMMEND
    }

};


export default connect(mapStateToProps)();
