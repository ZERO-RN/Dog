/**
 * Created by zerowolf on 2017/12/25.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,Alert,
    View
} from 'react-native';

export default class Nearby extends Component{
    constructor(props){
        super(props);

    }

    componentWillMount() {
        console.log('Nearby');
    }

    render(){
       return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'blue', fontSize: 18}}>
                    Nearby
                </Text>
            </View>
        )
    }
}