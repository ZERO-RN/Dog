/**
 * Created by zerowolf on 2017/11/6.
 */
/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-16 08:34:36
 * @modify date 2017-05-16 08:34:36
 * @desc [description]
 */
import {Platform} from 'react-native'
export const recommend = Platform.select({
    ios: 'http://localhost:3000/data/read?type=it',

    android: 'http://10.0.2.2:3000/data/read?type=it',
});
export const chat = Platform.select({
    ios: 'http://localhost:3000/data/read?type=chat',

    android: 'http://10.0.2.2:3000/data/read?type=chat',
});

export const chatData = Platform.select({
    ios: 'http://localhost:3000/data/read?type=chatData',

    android: 'http://10.0.2.2:3000/data/read?type=chatData',
});


// export const recommend = 'http://localhost:3000/data/read?type=it';
// export const recommend = 'https://api.douban.com/v2/movie/in_theaters';

// const hotshow = 'http://192.168.×.9:8080/weixin/hotshow.json';
// const sonshow = 'http://192.168.×.9:8080/weixin/sonshow.json';
// const usshow = 'http://192.168.×.9:8080/weixin/usshow.json';
// const nearcinemas = 'http://192.168.×.9:8080/weixin/nearcinemas.json';

// import { initHotshow, fetchLoading } from '../actions/action_home';
