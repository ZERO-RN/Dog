/**
 * Created by zerowolf on 2018/1/19.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,Alert,
    View,TouchableOpacity,Image
} from 'react-native';
import SizeUtil from '../../utils/SizeUtil';
import CutUpLine from '../../view/CutUpLine';
export default class Navigator extends Component {
    constructor(props) {
        super(props);

        this.state={
            text : '111'
        }
    }

    render() {
        var params = this.props;
        return (
            <View>
                <View style={{
                    height: 60,
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            params.onPress1();
                        }}
                        style={{marginLeft: 5, marginBottom: 5}}>

                        <Image
                            style={{width: 35, height: 35, borderRadius: 20}}
                            // source={require('../../images/dog1.png')}
                            source={{uri:params.img}}
                        />
                    </TouchableOpacity>

                    <View style={{flex: 1, marginLeft: 5, justifyContent: 'flex-start'}}>
                        <Text style={{fontSize: 13, color: 'black'}}>{params.title}</Text>
                        <Text style={{fontSize: 12, color: 'grey'}}>{params.content}</Text>
                        <Text style={{fontSize: 13, color: 'black'}}>{params.id}</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5}  onPress={() => {
                        params.onPress2(params.id)
                    }}>
                        <Text style={styles.textStyle}>私信</Text>
                    </TouchableOpacity>

                    <Text>{params.text}</Text>
            </View>

                {params.isLast?<View/>:<CutUpLine width={SizeUtil.width} backgroundColor={'#c8c8c8'}/>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 12,
        color: '#ff378a',
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#a9adad',
        marginRight: 10,
        backgroundColor: 'transparent',
        paddingRight: 8,
        paddingLeft: 8,
        paddingBottom: 4,
        paddingTop: 4,
        marginBottom: 10
    },
    textContent: {
        fontSize: 14,
        color: 'black',
    },
    contentContainerStyle: {
        marginTop: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        margin: 10,
        paddingRight: 50,
    },

    cellViewStyle: {
        marginTop: 0,
        paddingTop: 0,
        width: (SizeUtil.width - 80) / 3,
        height: (SizeUtil.width - 80) / 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shareStyle: {
        fontSize: 12,

    }
});
