/**
 * Created by zerowolf on 2017/11/15.
 */
import * as Types from './Types';
import { chat,chatData } from '../middleware/apis';
import {initFetch} from '../middleware/index-api';

//CHAT
// export const chat = (data) => {
//     return {
//         type: Types.ACTION_CHAT,
//         data
//     };
// };

export const Chat_Navigator = (data) => {
    return {
        type: Types.ACTION_CHAT_NAV,
        data
    };
};
export const Message = (data) => {
    return {
        type: Types.ACTION_SAVE_MESSAGES,
        data
    };
};
//添加list
export const addList = (data) => {
    return {
        type: Types.ACTION_CHAT,
        data
    }
}
//添加list
export const addChatData = (data) => {
    return {
        type: Types.ACTION_CHAT_MESSAGE,
        data
    }
}

// 拿到好友列表
export const initChat = () => {
    return initFetch(addList)(chat);
}


// 拿到好友列表
export const getChatItemData = (data) => {
    return {
        type: Types.ACTION_CHAT_ITEMDATA,
        data:data,

    };
};
export const getChatMessage = () => {
    return initFetch(addChatData)(chatData);
};

//根据好友id拿到数据
export const getChatItemDataById = (data,chatID) => {
    return {
        type: Types.ACTION_CHAT_MESSAGE_BY_ID,
        payload:{data:data,chatID:chatID}
    };
};
