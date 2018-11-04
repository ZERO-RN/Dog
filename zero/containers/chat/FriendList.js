/**
 * Created by zerowolf on 2018/1/17.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    TextInput,
    TouchableOpacity,
    ListView,
    FlatList,
    RefreshControl,
    ScrollView, Image
} from 'react-native';
import MyTextInput from '../../view/MyTextInput';
import SizeUtil from '../../utils/SizeUtil';
import ButtonView from '../../view/ButtonView';
import MyTabView from '../../view/MyTabView';
import Icon from 'react-native-vector-icons/FontAwesome'
import Item from './FriendItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initChat, getChatItemData, getChatMessage,getSocket} from '../../actions/action_Chat'

class FriendList extends Component {


    constructor(props) {
        super(props);
        _this = this;
        this.dataSource = [];
        this.renderList = this._renderList.bind(this);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});

        this.state = {
            text: '5555',
            List: ds.cloneWithRows(this.renderList()),
            refreshing: false,
        };
        this.renderRow = this._renderRow.bind(this);
    }

    componentWillMount() {
        this.props.initChatItemMessage('A3333');
        // this.props.initChatItemMessage(this.props.socket);
    }

    _renderList() {
        var {chatList} = this.props;
        var itemData = chatList.data;
        const {navigate} = this.props.navigation;
        for (var i = 0; i < itemData.length; i++) {
            itemId = itemData[i].id;

            this.dataSource.push(
                <Item

                    img={itemData[i].img}
                    title={itemData[i].title}
                    id={itemData[i].id}
                    content={itemData[i].content}
                    isLast={(i === (itemData.length - 1)) ? true : false}
                    navigation={this.props.navigation}
                    onPress1={() => {
                        // this.props.navigation.dispatch({
                        //     type:'ChatRoom'
                        // })
                    }}
                    onPress2={(text) => {
                        this.props.navigation.dispatch({
                            type: 'ChatRoom', chatID: text, callBack: (text) => {
                                this.refresh(text)
                            }
                        })
                    }}
                />
            );
        }
        // setTimeout(() => {
        //     this.setState({
        //         List: this.state.List.cloneWithRows(this.dataSource)
        //     });
        // }, 1000);
        // this.setState({
        //     List: this.state.List.cloneWithRows(this.dataSource)
        // });
        return this.dataSource;

    }

    _renderRow(rowData) {
        return (<View style={{width: SizeUtil.width,}}>
            {rowData}
        </View>)
    }

    _clearDataSource() {
        this.dataSource = [];
    }

    _onRefresh() {
        this._clearDataSource();
        this.setState({
            refreshing: true,
        });

        var {chatList} = this.props;
        var itemData = chatList.data;
        const {navigate} = this.props.navigation;
        setTimeout(() => {
            for (var i = 0; i < itemData.length; i++) {
                itemId = itemData[i].id;

                this.dataSource.push(
                    <Item
                        img={itemData[i].img}
                        title={itemData[i].title}
                        id={itemData[i].id}
                        content={itemData[i].content}
                        isLast={(i === (itemData.length - 1)) ? true : false}
                        navigation={this.props.navigation}
                        onPress1={() => {
                            // this.props.navigation.dispatch({
                            //     type:'ChatRoom'
                            // })
                        }}
                    />
                );
                this.dataSource.push(
                    <Item
                        img={itemData[i].img}
                        title={itemData[i].title}
                        id={itemData[i].id}
                        content={itemData[i].content}
                        isLast={(i === (itemData.length - 1)) ? true : false}
                        navigation={this.props.navigation}
                        onPress1={() => {
                            // this.props.navigation.dispatch({
                            //     type:'ChatRoom'
                            // })
                        }}
                    />
                );
            }
            this.setState({
                List: this.state.List.cloneWithRows(this.dataSource),
                refreshing: false
            });
        }, 2000);
    }

    refresh(text) {
        this.setState({
            text: text
        })

    }

    render() {
        console.log(this.props.messages);
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView leftView={<View/>} title={'我的好友'} rightIcon={'md-add'}/>
                <Text>{this.state.text}</Text>
                <View style={{
                    height: 45, width: SizeUtil.width, backgroundColor: '#c8c8c8', flexDirection: 'row',
                    justifyContent: 'flex-start', alignItems: 'center'
                }}>
                    <TextInput placeholder={'请输入好友名或ID'} style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        height: 30,
                        marginLeft: 10,
                        marginRight: 10,
                        backgroundColor: 'white',
                        borderRadius: 5
                    }}/>
                    <View style={{backgroundColor: '#b4b4b4', width: 1, height: 40}}/>
                    <Icon size={25} name={'search'}
                          style={{padding: 10, color: '#b4b4b4', backgroundColor: 'transparent'}}/>

                </View>

                <ScrollView refreshControl={
                    <RefreshControl refreshing={this.state.refreshing}
                                    onRefresh={this._onRefresh.bind(this)}
                                    title={'正在加载'}>

                    </RefreshControl>}>

                    <ListView
                        dataSource={this.state.List} renderRow={this.renderRow}/>

                </ScrollView>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        chatList: state.RS_Chat,
        navigation: state.chat_nav.data,
        // socket: state.chat_Socket.data,
        messages: state.save_messages.data
    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initChatItemMessage: getChatMessage,
        // initSocket: getSocket,
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(FriendList);
