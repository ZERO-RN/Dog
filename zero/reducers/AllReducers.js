/**
 * Created by zerowolf on 2017/12/6.
 */

import {combineReducers} from 'redux';
import {ChongQuan,pay_manage,chongquan_navigation} from './chongquan/reducer';
import {mine} from './mine/reducer';
import {Home_Recommend,home_nav,Recommend_LIST,getRecommend} from './home/reducer';
import {Pair} from './pair/reducer';
import {splash} from './splash/reducer';
import {nav} from './navigators/index';
import {Chat_LIST,chat_nav,chat_item,chat_message,chat_message_byID,chat_Socket,save_messages} from './chat/reducer';

export default AllReducers = combineReducers({
    RS_Nav:nav,
    RS_ChongQuan : ChongQuan,
    RS_Pay_Manage : pay_manage,
    RS_Mine : mine,
    RS_Home_Recommend : Home_Recommend,
    home_nav : home_nav,
    chongquan_navigation : chongquan_navigation,
    RS_Recommend_LIST : Recommend_LIST,
    RS_RECOMMEND:getRecommend,
    RS_Pair : Pair,
    RS_Splash : splash,
    RS_Chat:Chat_LIST,
    chat_nav:chat_nav,
    chat_item:chat_item,
    chat_message:chat_message,
    chat_message_byID:chat_message_byID,
    save_messages:save_messages,
});