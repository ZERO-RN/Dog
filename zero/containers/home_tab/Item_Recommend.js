/**
 * Created by zerowolf on 2017/12/25.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    ListView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
import CutUpLine from '../CutUpLine';
export default class Item extends Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._renderList())
        }
        this.renderRow = this._renderRow.bind(this);
        this.pressShare = this._pressShare.bind(this);
        this.pressComment = this._pressComment.bind(this);
        this.pressAgree = this._pressAgree.bind(this);
        this.attention = this._attention.bind(this);
    };

    _attention() {
        Alert.alert('关注' + this.props.id)
    }

    _pressShare() {
        Alert.alert('分享转发')
    }

    _pressComment() {
        Alert.alert('评论')
    }

    _pressAgree() {
        Alert.alert('赞')
    }

    _renderList() {
        var images = [];
        for (var i = 0; i < 5; i++) {
            images.push(
                <Image style={{width: (width-100)/3, height: (width-100)/3, resizeMode: 'contain'}}
                       source={require('../../images/xiaotu01.png')}/>
            );

        }
        return images;

    }



    _renderRow(data) {
        return (
            <View style={styles.cellViewStyle}>
                {data}
            </View>
        )
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        let {data} = this.props;

        console.log(data)
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={() => {
                this.props.onPress();
            }}>

                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
                    <View style={{
                        height: 40,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Image source={require('../../images/qianbao.png')}
                               style={{width: 35, height: 20, marginLeft: 5}}/>

                        <View style={{flex: 1, marginLeft: 15}}>
                            <Text style={{fontSize: 13, color: 'black'}}>问问小管家</Text>
                            <Text style={{fontSize: 12, color: 'grey'}}>比格犬|北京市|高三</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.attention}>
                            <Text style={styles.textStyle}>关注</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.textContent}>
                        {data.title}
                    </Text>

                    <ListView dataSource={this.state.dataSource}
                              renderRow={this.renderRow}
                              contentContainerStyle={styles.contentContainerStyle}
                              style={{marginTop: 0}}/>

                    <CutUpLine/>
                    {/*<View style={{width:width-20,backgroundColor:'#e7e9e9',height:1}}/>*/}

                    <View style={{
                        flexDirection: 'row',
                        width: width,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingRight: 20,
                        paddingLeft: 20
                    }}>
                        <Icon.Button name="share-square-o" backgroundColor='transparent' color='grey'
                                     onPress={this.pressShare}>
                            转发
                        </Icon.Button>
                        <Icon.Button name="share-square-o" backgroundColor='transparent' color='grey'
                                     onPress={this.pressComment}>
                            评论
                        </Icon.Button>
                        <Icon.Button name="share-square-o" backgroundColor='transparent' color='grey'
                                     onPress={this.pressAgree}>
                            赞
                        </Icon.Button>

                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
{/*<View style={{height:160,width:width,justifyContent:'space-around',flexDirection:'row'}}>*/
}
{/*{this.renderImage}*/
}
{/*</View>*/
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
        padding: 5
    },
    contentContainerStyle: {
        marginTop: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        margin:10,
        paddingRight: 50,
    },

    cellViewStyle: {
        marginTop: 0,
        paddingTop: 0,
        width: (width-80)/3,
        height: (width-80)/3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shareStyle: {
        fontSize: 12,

    }
});
