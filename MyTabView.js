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
    Image,
    Dimensions
} from 'react-native';
const {width, height}= Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
export default class Navigator extends Component{
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
               <View/>
               <Text style={{
                   fontSize: 18,
                   top: 25,
                   color: 'white',
                   width: 40,
                   backgroundColor:'transparent',
                   position: 'absolute',
                   left: width / 2 - 20
               }}>{params.title}</Text>

               {params.leftView?params.leftView:<TouchableOpacity activeOpacity={0.5}
                                                   style={{position: 'absolute', top: 15, left: 20,padding:5}}
                                                   onPress={() => {
                                                       params.navigation.goBack();
                                                   }}>
                   <Icon size={30} name={'angle-left'}
                         style={{ color: 'white',backgroundColor:'transparent'}}/>

               </TouchableOpacity>}

               {params.rightView?params.rightView:<TouchableOpacity activeOpacity={0.5}
                                                   style={{position: 'absolute', top: 15, right: 20,padding:5}}
                                                   onPress={() => {
                                                       Alert.alert('更多')
                                                   }}>
                   <Ionicons size={30} name={'md-more'}
                         style={{ color: 'white',backgroundColor:'transparent'}}/>

               </TouchableOpacity>}



           </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    linearGradient: {
        width: width,
        height: 60,
        backgroundColor: '#00f',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    selectedText: {
        color: 'grey',
        fontSize: 14,
    }
});