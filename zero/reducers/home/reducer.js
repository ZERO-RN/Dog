/**
 * Created by zerowolf on 2017/12/6.
 */
import * as types from '../../actions/Types';


export const Home_Recommend = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_Home_Recommend:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};
export const home_nav = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_Home_Navigator:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};
export const Banner = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_Home_Recommend_BANNER:
            let subjects = action.data;
            let data = subjects.slice(0, 5);
            return Object.assign(
                {} , state , {
                    data : data
                });
        default:
            return state;
    }
}
export const Recommend_LIST = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_Home_Recommend_LIST:
            return Object.assign(
                {} , state , {
                    data : action.data
                });
        default:
            return state;
    }
}
export const getRecommend = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_Home_Recommend_LIST:
            let recommend = action.data;
            let data = recommend.info.recommend;
            return Object.assign(
                {} , state , {
                    data : data
                });
        default:
            return state;
    }
}
export const getNews = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_Home_Recommend_LIST:
            let recommend = action.data;
            let data = recommend.info.news;
            return Object.assign(
                {} , state , {
                    data : data
                });
        default:
            return state;
    }
}
export const getNearby = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_Home_Recommend_LIST:
            let recommend = action.data;
            let data = recommend.info.nearby;
            return Object.assign(
                {} , state , {
                    data : data
                });
        default:
            return state;
    }
}
export const getVideo = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_Home_Recommend_LIST:
            let recommend = action.data;
            let data = recommend.info.video;
            return Object.assign(
                {} , state , {
                    data : data
                });
        default:
            return state;
    }
}
