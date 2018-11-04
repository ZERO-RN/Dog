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
import {initChat,Chat_Navigator,Message} from '../../actions/action_Chat'
import FriendList from './FriendList'

var socket ;
class Tio_im extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '消息',
            header: null,
            headerBackTitle: null,
        }
    );
    constructor(props) {
        super(props);
        _this = this;
        this._connect();
        this.props.initChatList();
        this.props.initChatNav(this.props.navigation);
        this.props.initMessage('messages');
    }
    // static navigationOptions = ({navigation}) =>
    //     OptionsUtil.Options(navigation, '', null, <TouchableOpacity activeOpacity={0.5}
    //                                                                    style={{
    //                                                                        position: 'absolute',
    //                                                                        top: 15,
    //                                                                        right: 15,
    //                                                                        padding: 5
    //                                                                    }}
    //                                                                    onPress={() => {
    //                                                                        // Alert.alert('更sasd')
    //                                                                        // navigation.state.params.switch();
    //                                                                        navigation.state.params.callBack('369');
    //                                                                        navigation.goBack();
    //                                                                    }}>
    //         <Ionicons size={30} name={'md-more'}
    //                   style={{color: 'white', backgroundColor: 'transparent'}}/>
    //
    //     </TouchableOpacity>);

    // static navigationOptions = ({navigation, screenProps}) => ({
    //         headerTitle: '聊天室',
    //         header: null,
    //         headerBackTitle: null,
    //     }
    // );

    _connect() {
        // if (curUser) {
        //     alert("当前已登录,请先退出登录!");
        //     return;
        // }
        that = this;
        var ip = '//127.0.0.1';
        var port = '8888';
        // var username = this.state.username;
        // var password = this.state.password;
        // logDiv = document.getElementById('logs');
        // let url = "ws:" + ip + ":" + port + "?username=" + this.state.username + "&password=" + this.state.password;
        let url = "ws:" + ip + ":" + port + "?username=" + "99999" + "&password=" + "123";
        console.log(url);
        socket = new WebSocket(url);
        console.log(socket);
        socket.onopen = function (e) {
            console.log("Connection open ...");
            socket.send("Hello WebSockets!");
            // logDiv.innerHTML+="<font color='green' size='1'>登录成功...</font><br>";
            // var userCmd = "{\"cmd\":17,\"type\":\"0\",\"userid\":\""+username+"\"}";
            // socket.send(userCmd);//获取登录用户信息;
            // scrollToBottom();
            console.log('登陆成功')
        };
        socket.onerror = function (e) {
            console.log('登录失败')
            // logDiv.innerHTML+="<font color='red' size='1'>异常:"+e+"</font><br>";
            // scrollToBottom();
        };
        socket.onclose = function (e) {
            console.log('退出登录');
            // curUser = null;
            // logDiv.innerHTML+="<font color='green' size='1'>退出登录...</font><br>";
            // document.getElementById("onlinePanel").innerHTML="&nbsp;在线成员(0/0)";
            // scrollToBottom();
        };
        socket.onmessage = (e)=> {
            var data = e.data;

            var dataObj = eval("(" + data + ")");//转换为json对象

            var newData = eval("(" + dataObj.data + ")");
            console.log(dataObj);
            if ("undefined" === typeof(dataObj.code) && dataObj.command === "COMMAND_CHAT_RESP") {//接收到聊天响应处理;
                that.COMMAND_CHAT_RESP(newData);
            } else if (dataObj.code = 100 && dataObj.command === "COMMAND_GET_USER_RESP") {//获取用户信息响应处理;
                that.COMMAND_GET_USER_RESP(newData);
            } else if (0 === dataObj.code && dataObj.command === "COMMAND_CHAT_RESP") {//聊天发送状态;
                that.COMMAND_CHAT_RESP_SEND_STATUS(newData);
            } else if ("400" === dataObj.code && dataObj.command === "COMMAND_JOIN_GROUP_RESP") {//加入群组响应状态处理;
                that.COMMAND_JOIN_GROUP_RESP.bind(newData);
            } else if (dataObj.command === "COMMAND_JOIN_GROUP_NOTIFY_RESP") {//加入群组的消息通知处理;
                that.COMMAND_JOIN_GROUP_NOTIFY_RESP(newData);
            } else if (dataObj.command === "COMMAND_EXIT_GROUP_NOTIFY_RESP") {
                that.COMMAND_EXIT_GROUP_NOTIFY_RESP(newData);
            } else {
                that.OTHER(newData);
            }
            // scrollToBottom();
        };
    }

    //退出登录
    disConnect() {
        socket.close();
    }

    //私聊
    send1(content, toId) {
        // var toId = "";
        // if(onSelected){
        //     toId = onSelected.getElementsByTagName("img")[0].alt;
        // }
        // var toId = '151615279455asd3';
        // var toId = '151615ss'
        var createTime = new Date().getTime();
        // var content = this.state.sendObj;
        if (content == "")
            return;
        var msg = "{\"from\": \"" + '99999' + "\",\"to\": \"" + toId + "\",\"cmd\":11,\"createTime\":" + createTime + ",\"msgType\": \"text\",\"content\": \"" + content + "\"}";
        //socket.send(msg);
        // var chatObj = eval("("+msg+")");
        // var createTime = new Date(chatObj.createTime).Format("yyyy/MM/dd HH:mm:ss");
        // //处理数据
        // logDiv.innerHTML+="<font color='#228B22' size='1' style='font-weight: bold'>"+chatObj.from+" "+createTime+"</font><br>";
        // //处理数据
        // logDiv.innerHTML+="<font color='#FFFFFF' size='1'>&nbsp;"+chatObj.content+"</font><br>";
        // document.getElementById('content').value = "";
    }

    //群聊
    sendGroup(content) {
        var createTime = new Date().getTime();
        // var content = this.state.sendObj;
        if (content === "")
            return;
        var msg = "{\"from\": \"" + '99999' + "\",\"createTime\":" + createTime + ",\"cmd\":11,\"group_id\":\"100\",\"chatType\":\"1\",\"msgType\":\"text\",\"content\": \"" + content + "\"}";
        //socket.send(msg);
        // var chatObj = eval("("+msg+")");
        // var createTime = new Date(chatObj.createTime).Format("yyyy/MM/dd HH:mm:ss");
        // //处理数据
        // logDiv.innerHTML+="<font color='#228B22' size='1' style='font-weight: bold'>"+curUser.nick+"("+curUser.id+")"+" "+createTime+"</font><br>";
        // //处理数据
        // logDiv.innerHTML+="<font color='#FFFFFF' size='1'>&nbsp;"+chatObj.content+"</font><br>";
        // document.getElementById('content').value = "";
    }

    COMMAND_EXIT_GROUP_NOTIFY_RESP=(data)=> {
        // var exitGroupNotify = eval("("+data.data+")");
        // logDiv.innerHTML+="<font color='#A3A3A3' size='1'>"+exitGroupNotify.user.nick+"("+exitGroupNotify.user.id+")退出群聊...</font><br>";
        // socket.send(onlineUserCmd);//获取在线用户列表;
        console.log('456')
    }

    //加入群组的消息通知处理;
    COMMAND_JOIN_GROUP_NOTIFY_RESP(data) {
        // var joinGroupNotify = eval("("+data.data+")");
        // logDiv.innerHTML+="<font color='#A3A3A3' size='1'>"+joinGroupNotify.user.nick+"("+joinGroupNotify.user.id+")加入群聊...</font><br>";
        // socket.send(onlineUserCmd);//获取在线用户列表;
        console.log('123');
        console.log(data);
        this._onReceive(data)
    }

    //加入群组响应状态处理;
    COMMAND_JOIN_GROUP_RESP(data) {
        console.log('789')
        //成功加入群组响应信息;
    }

    //发送聊天请求发送状态处理;
    COMMAND_CHAT_RESP_SEND_STATUS(data) {
        console.log('100');
        console.log(data)
        //发送成功后的状态处理...
    }

    //获取用户信息响应处理;
    COMMAND_GET_USER_RESP(data) {
        console.log('1111')
        // var onlineUsers = eval("("+data.data+")");
        // if(!Array.isArray(onlineUsers)){
        //     curUser = onlineUsers;
        // }else{
        //     onlineUserArray = [];
        //     for(var i = 0 ; i < onlineUsers.length ; i++){
        //         onlineUserArray.push(onlineUsers[i]);
        //     }
        //     initOnlineUsers();
        // }
    }

    //接收到聊天响应处理;
    COMMAND_CHAT_RESP(data) {
        // var newData = eval("(" + dataObj.data + ")");//转换为json对象

        // if (!newData.chatType) {
           // this.onReceive(newData.content);
        // }
        console.log('222');
        console.log(data);
        console.log(data.content);
        this._onReceive(data);
        // var chatObj = eval("("+data.data+")");
        // var createTime = new Date(chatObj.createTime).Format("yyyy/MM/dd HH:mm:ss");
        // var from = chatObj.from;
        // if(from == username)
        //     return;
        // var content = chatObj.content;
        // var user = getOnlineUserById(from);
        // if(user){
        //     logDiv.innerHTML+="<font color='#009ACD' size='1' style='font-weight: bold'>"+user.nick+"("+user.id+")"+" "+createTime+"</font><br>";
        // }else{
        //     logDiv.innerHTML+="<font color='#009ACD' size='1' style='font-weight: bold'>"+from+" "+createTime+"</font><br>";
        // }
        // //处理数据
        // logDiv.innerHTML+="<font color='#FFFFFF' size='1'>&nbsp;"+content+"</font><br>";
    }

    //其它信息处理;
    OTHER(data) {
        console.log('333')
    }

    _onReceive = (messages) => {
        console.log(messages);
        // const { owner } = this.props
        // const name = messages.from;
        const message = {
            _id: Math.round(Math.random() * 1000000),
            text: messages.content,
            createdAt: new Date(),
            user: {
                _id: messages.to,
                name: messages.to,
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
            },
        }
        // this.props.saveMessage({ user: { name }, owner, message })
        console.log(messages.content);
        console.log(messages.from);
        var from = messages.from;
        this.props.initMessage({user:'99999',from:{from},messages:{messages}})
    };


    render() {
        return (
           this.props.chatList?<FriendList/>:<View/>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        chatList: state.RS_Chat.data,
        // navigation: state.navigation,
    }

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initChatList: initChat,
        initChatNav: Chat_Navigator,
        // saveMessage(params) {
        //     dispatch({ type: 'notice/save_message', data: params });
        // },
        initMessage:Message,
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Tio_im);
