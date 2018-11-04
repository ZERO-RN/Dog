/**
 * Created by zerowolf on 2018/1/16.
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
import SizeUtil from '../utils/SizeUtil';
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
export default class MyTabView extends Component{
    constructor(props){
        super(props);

    }

    render(){
        var params = this.props;
       return (
           <LinearGradient
               start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
               locations={[0, 0.6, 1]}
               colors={['#a353cd', '#7464da', '#6d6fe6']}
               style={styles.linearGradient}>

               <Text style={{
                   fontSize: 18,
                   color: 'white',
                   marginTop:12,
                   backgroundColor:'transparent',
               }}>{params.title}</Text>

               {params.leftView?params.leftView:<TouchableOpacity activeOpacity={0.5}
                                                   style={{position: 'absolute', top: 15, left: 15,padding:5}}
                                                   onPress={() => {
                                                       params.navigation.goBack();
                                                   }}>
                   <Icon size={30} name={'angle-left'}
                         style={{ color: 'white',backgroundColor:'transparent'}}/>

               </TouchableOpacity>}

               {params.rightView?params.rightView:<TouchableOpacity activeOpacity={0.5}
                                                   style={{position: 'absolute', top: 15, right: 15,padding:5}}
                                                   onPress={() => {
                                                       Alert.alert('更多')
                                                   }}>
                   <Ionicons size={30} name={params.rightIcon?params.rightIcon:'md-more'}
                         style={{ color: 'white',backgroundColor:'transparent'}}/>

               </TouchableOpacity>}



           </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        width: SizeUtil.width,
        height: 60,
        backgroundColor: '#00f',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedText: {
        color: 'grey',
        fontSize: 14,
    }
});