/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput,
    Alert,
    StatusBar
} from 'react-native';
import s from '../AllStyles';
import {StackNavigator, TabBarTop, TabNavigator} from "react-navigation";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Icon from 'react-native-vector-icons/FontAwesome'
// import Icon from 'react-native-vector-icons/Ionicons'
import Nearby from '../home_tab/Nearby';
import News from '../home_tab/News';
import Recommend from '../home_tab/Recommend';
import Video from '../home_tab/Video';
const {width, height} = Dimensions.get('window');
const deviceW = Dimensions.get('window').width;
import LinearGradient from 'react-native-linear-gradient';
import {Page_Home_Recommend, Home_Navigator, initRecommend, getRecommend} from '../../actions/action_home'

const basePx = 375

function px2dp(px) {
    return px * deviceW / basePx
}


const TabRouteConfigs = {
    Recommend: {
        screen: Recommend,
        navigationOptions: {
            tabBarLabel: '推荐',
            tabBarIcon: ({focused, tintColor}) => (
                <Icon name="md-person" size={25} color={tintColor}/>
            ),
        },
    },

    // News: {
    //     screen: News,
    //     navigationOptions: ({navigation}) => ({
    //         tabBarLabel: '最新',
    //
    //     }),
    // },
    //
    // Nearby: {
    //     screen: Nearby,
    //     navigationOptions: ({navigation}) => ({
    //         tabBarLabel: '附件',
    //     }),
    // },
    Video: {
        screen: Video,
        navigationOptions: {
            tabBarLabel: '视频',
            tabBarIcon: ({focused, tintColor}) => (
                <View style={{}}/>
            ),

        },
    },
};
const TabNavigatorConfigs = {
    initialRouteName: 'Recommend',
    tabBarComponent: TabBarTop,
    swipeEnabled: true,
    tabBarPosition: 'top',
    lazy: true,
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#ff1827',//选中的文字颜色
        inactiveTintColor: '#3d3f3f',//未选中的文字颜色

        indicatorStyle: {
            backgroundColor: 'blue',
            height: 0,
            width: 60,

        }
        ,
        style: {
            backgroundColor: '#a398ed',
            height: 40,
            width: width,
            paddingLeft: 60,
            paddingRight: 60,
            justifyContent: 'center',
            alignSelf: 'center'
        },
        iconStyle: {
            position: 'absolute',
            top: 20,
        },
        labelStyle: {
            textDecorationLine: 'underline',
            width: 120,
            marginLeft: 60,
            marginRight: 60,
            fontSize: 14,
            paddingVertical: 0,
            marginTop: Platform.OS === 'android' ? 0 : 5
        },
    },
};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

class Home extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '账单',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        this.props.initData();
        this.props.initRecommend();
         this.props.initRecommendNavigatorAction(this.props.navigation);


        this.state = {
            selectedTab: 'recommend',
            isSearch: true
        }
        this.editNews = this._editNews.bind(this);
    }

    _editNews() {
        Alert.alert('编辑新内容')
    }

    componentWillMount() {
        // this.props.initPayNavigatorAction(this.props.RS_Navigate)
    }

    componentDidUpdate() {
        console.log('update')
    }

    componentWillReceiveProps(nextProps) {
        console.log('receive')
    }

    componentDidMount() {
        console.log('did')
    }

    componentWillUnmount() {
        console.log('un')
    }

    onNavigationStateChange(prevState, newState, action) {
        console.log('navigation')

    }

    render() {
        console.log('render')
        let {recommend} = this.props;
        console.log(recommend);
        return (

            <View style={{flex: 1}}>

                <StatusBar
                    animated={true}
                    hidden={false}
                    backgroundColor={'transparent'}
                    translucent={true}
                    barStyle={'light-content'}
                />


                <LinearGradient
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    locations={[0,0.6,1]}
                    colors={['#7c56cd', '#7464da', '#6d6fe6']}
                    style={styles.linearGradient}>

                    <TouchableOpacity
                        style={{position:'absolute',
                            left:140, top:25,backgroundColor:'transparent'
                        }}
                        activeOpacity={0.5}
                                      onPress={() => {
                                          this.setState({
                                              selectedTab: 'recommend',
                                              isSearch: true
                                          })
                                      }}>

                        <Text style={{fontSize: 16, color: 'white'}}>推荐</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{position:'absolute',
                            right:140, top:25,backgroundColor:'transparent'
                        }}
                        activeOpacity={0.5}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'video',
                                isSearch: false
                            })
                        }}>

                        <Text style={{fontSize: 16, color: 'white'}}>视频</Text>
                    </TouchableOpacity>

                    {this.state.isSearch ?
                        <TouchableOpacity activeOpacity={0.5}
                                          onPress={()=>{
                                              console.log('sousuo')
                                          }}
                                          style={{position:'absolute', right:20, top:Platform.OS==='android'?25:20,justifyContent:'center',alignItems:'center',flexDirection:'row'}}>

                        {/*<Icon style={{backgroundColor:'transparent'}} name="md-search" size={25} color={'white'}/>*/}
                            {/*<Text style={{fontSize:14,color:'white',marginLeft:5,backgroundColor:'transparent'}}>搜索</Text>*/}
                        </TouchableOpacity>
                        : null}

                </LinearGradient>
                <Text style={{fontSize:40}} onPress={()=>{
                    this.props.navigation.dispatch({
                        type:'Home_One'
                    })
                }}>999999</Text>
                <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
                    {this.state.selectedTab === 'recommend' ?
                        this.props.recommend ? <Recommend/> : <Text>ppppp</Text>
                        : <Video/>}
                    {/*{this.props.recommend ? <Tab/> : <Text>ppppp</Text>}*/}
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        width: width,
        height: 60,
        backgroundColor: '#00f',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});

const mapStateToProps = (state) => {
    return {
        recommend: state.RS_RECOMMEND.data,
        homeData: state.RS_Recommend_LIST.data,
        // navigation: state.home_nav.data,
    }

};


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initRecommend: getRecommend,
        initRecommendNavigatorAction: Home_Navigator,
        initData: initRecommend
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Home);
