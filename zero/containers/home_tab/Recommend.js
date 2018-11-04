/**
 * Created by zerowolf on 2017/12/25.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    ListView
} from 'react-native';
import TopScreen from './TopScreen';
import Item from './Item_Recommend';
import FetchUtils from '../../utils/FetchUtils';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Page_Home_Recommend, Home_Navigator, getRecommend,initRecommend} from '../../actions/action_home'
 class Recommend extends Component {
     constructor(props) {
         super(props);
         console.log('cons')
         var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
         this.state = {
             dataSource: ds.cloneWithRows(this._renderList())
         };
         this.renderRow = this._renderRow.bind(this);
     }

     componentDidMount() {
         console.log('did')
     }

     componentWillReceiveProps(nextProps) {
         console.log('receive')

     }

     componentDidUpdate() {
         console.log('update')

     }


     componentWillMount() {
         let {recommend} = this.props;
         var list = [];

         // console.log('Recommend');
         // let url = 'http://localhost:3000/data/read?type=it';
         // FetchUtils.ajax(url, (data) => {
         //         console.log(data);
         //     },
         //     (err) => {
         //         Alert.alert('err');
         //     })
     }

     _renderList() {
         let {recommend} = this.props;
         var list = [];

         console.log(recommend)
         // Alert.alert(recommend)
         list.push(<TopScreen recommend ={recommend}/>);
         for (var i = 0; i < recommend.data.length; i++) {
             console.log(recommend.data[i].url);
             let data = recommend.data[i].url;
             list.push(
                 <Item data={recommend.data[i]} id={i} onPress={() => {
                     this.props.navigation.dispatch({
                         type: 'Home_One'
                     });
                 }}/>
             );
         }
         return list;
     }

     /**
      * @description 设置下一步按钮的可点击状态
      * @data {jQuery} $btn
      **/
     _renderRow(data) {
         return (
             <View style={{
                 marginTop: 10
             }}>{data}</View>
         );
     }

     render() {
         let {recommend} = this.props;
         console.log(recommend);
         return (

             <View style={{flex: 1, top: -10, justifyContent: 'flex-start', alignItems: 'center'}}>
                 <Text onPress={()=>{
                     this.props.navigation.dispatch({
                         type:'Home_One'
                     })
                 }}>asadasd</Text>
                 <ListView
                     // style={{position:'relative', top:-10}}
                     dataSource={this.state.dataSource}
                     renderRow={this.renderRow}
                     initialListSize={10}
                     enableEmptySections={true}
                     removeClippedSubviews={false}
                 />
             </View>

         );
     }

}
const mapStateToProps = (state) => {
    return {
        navigation: state.home_nav.data,
        recommend:state.RS_RECOMMEND
    }

};


export default connect(mapStateToProps)(Recommend);
