import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity, Alert
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import OptionsUtil from '../../utils/OptionsUtil'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {GiftedChat, Actions, Bubble, SystemMessage} from 'react-native-gifted-chat';
import ChatItem from './ChatItem';
import MyTabView from '../../view/MyTabView';
import {initChat, getChatItemData,getChatMessage,getChatItemDataById,SOCKET} from '../../actions/action_Chat'
class ChatRoom extends Component {
    back = (state, goBack) => { //把属性传递过来，然后进行使用
        state.params.onGoBack('this is back data ') //回调传值
        goBack() //点击POP上一个页面得方法
    }
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '心动',
            header:null,
            headerBackTitle: null,
        }
    );


    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.initChatItemData('11111');
        this.props.initChatItemMessageById(this.props.chatMessages,'A'+this.props.chatID);

    }



    render() {
        console.log(this.props.messages);
        return (
            <View style={{flex: 1, justifyContent: 'flex-start'}}>
                <MyTabView navigation={this.props.navigation} title={this.props.chatID}/>

                {this.props.chatMessages?<ChatItem/>:<View/>}
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        // navigation:state.chat_nav.data,
        chatMessages:state.chat_message.data,
        chatID: state.RS_Nav.chatID,
        callBack: state.RS_Nav.callBack,
        chat_item:state.chat_item.data,
        messages:state.save_messages.data
    }

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initChatItemData: getChatItemData,
        initChatItemMessageById: getChatItemDataById,

    }, dispatch);
};


export default connect(mapStateToProps,mapDispatchToProps)(ChatRoom);

