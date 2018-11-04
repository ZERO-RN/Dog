/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    ListView,
    Dimensions, TouchableOpacity
} from 'react-native';
import s from '../AllStyles';
const {width, height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {Home_Navigator}  from '../../actions/action_home'
import {Chongquan_Navigation}from '../../actions/action_ChongQuan';
import SizeUtil from '../../utils/SizeUtil';
import OptionsUtil from '../../utils/OptionsUtil';
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient';
import MyTabView from '../../view/MyTabView';

class ChongQuan extends Component {
    // static navigationOptions = ({navigation}) =>
    // OptionsUtil.Options(navigation, 'md-arrow-back', 'md-more', '信用卡管理', () => {
    //         navigation.goBack()
    //     }, () => {
    //
    //     }
    // );
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '配对',
            header: null,
            headerBackTitle: null,
        }
    );
    // static navigationOptions = ({navigation}) =>
    //     OptionsUtil.Options(navigation, 'md-arrow-back', 'md-more', '配对', () => {
    //             navigation.goBack()
    //         }, () => {
    //
    //         }
    //     );

    constructor(props) {
        super(props);

        this.props.initNavigation(this.props.navigation);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._renderList())
        };
        this.renderRow = this._renderRow.bind(this);
    }

    _renderList() {
        let list = [];
        for (let i = 0; i < 100; i++) {
            list.push(
                <Image style={{width: width, height: height - 100}} resizeMode={'contain'}
                       source={require('../../images/peidui.png')}/>
            )
        }
        return list;
    }

    _renderRow(rowData) {
        return (
            <View>
                {rowData}
            </View>
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MyTabView
                    title='配对'
                    leftView={<View/>}
                    rightView={<TouchableOpacity activeOpacity={0.5}
                                                 style={{
                                                     position: 'absolute',
                                                     top: 25,
                                                     right: 10
                                                 }}
                                                 onPress={() => {
                                                     // Alert.alert('发布')
                                                     this.props.navigation.dispatch({
                                                         type: 'Heart',
                                                     });
                                                 }}>
                        <Text style={{
                            color: 'black',
                            backgroundColor: 'yellow',
                            borderRadius: 5,
                            padding: 3,
                            paddingRight: 8,
                            paddingLeft: 8,
                            fontSize: 12,
                        }}>发布</Text>
                    </TouchableOpacity>
                    }/>


                <View style={{
                    width: width,
                    height: 40,
                    justifyContent: 'space-around',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>

                    <Text style={styles.selectedText}>深圳市 ></Text>
                    <Text style={styles.selectedText}>狗 ></Text>
                    <Text style={styles.selectedText}>状态 ></Text>

                </View>

                <ListView style={{padding: 0, position: 'relative'}} enableEmptySections={true}
                          dataSource={this.state.dataSource} renderRow={this.renderRow}/>
            </View>
        );


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
const mapStateToProps = (state) => {
    return {
        // navigation: state.navigation.data,
    }

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initNavigation: Chongquan_Navigation

    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(ChongQuan);
