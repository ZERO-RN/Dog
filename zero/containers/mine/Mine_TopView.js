/**
 * Created by zerowolf on 2017/12/25.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,Alert,
    View,
    Image
} from 'react-native';

export default class Navigator extends Component{
    constructor(props){
        super(props);

    }

    render(){
       return (
           <View style={{flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
               <Image style={{width:30,height :30}} source={this.props.image}/>
               <Text style={{fontSize:13, color:'#4b4d4d',marginTop:5}}>{this.props.title}</Text>
           </View>
        )
    }
}