/**
 * Created by zerowolf on 2017/11/15.
 */

import * as Types from './Types';
import { recommend } from '../middleware/apis';
import {initFetch} from '../middleware/index-api';


//Home
export const Page_Home_Recommend = (data) => {
    return {
        type: Types.ACTION_Home_Recommend,
        // data:(data===true) ? false : true
        data
    };
};
export const Home_Navigator = (data) => {
    return {
        type: Types.ACTION_Home_Navigator,
        data
    };
};

//添加轮播
export const addBanner = (data) => {
    return {
        type: Types.ACTION_Home_Recommend_BANNER,
        data
    }
}

//添加list
export const addList = (data) => {
    return {
        type: Types.ACTION_Home_Recommend_LIST,
        data
    }
}

// 推荐页初始请求
export const initRecommend = () => {
    return initFetch(addList)(recommend);
}

//拿到Recommend
export const getRecommend = (data)=>{
    return{
        type:Types.ACTION_GET_RECOMMEND,
        data
    }
}

//拿到Recommend
export const getNews = (data)=>{
    return{
        type:Types.ACTION_GET_NEWS,
        data
    }
}

//拿到Recommend
export const getNearby = (data)=>{
    return{
        type:Types.ACTION_GET_NEARBY,
        data
    }
}

//拿到Recommend
export const getVideo = (data)=>{
    return{
        type:Types.ACTION_GET_VIDEO,
        data
    }
}




