/**
 * Created by zerowolf on 2017/12/6.
 */
import * as types from '../../actions/Types';



// export const navigation = (state = {}, action) => {
//     switch (action.type) {
//         case types.ACTION_Home_Navigator:
//             return Object.assign(
//                 {},
//                 state,
//                 {data: action.data}
//             );
//         default:
//             return state;
//     }
// };

export const Chat_LIST = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_CHAT:
            let chat = action.data;
            let data = chat.info.chat;
            return Object.assign(
                {}, state, {
                    data: data
                });
        default:
            return state;
    }
};
export const chat_nav = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_CHAT_NAV:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};
export const chat_item = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_CHAT_ITEMDATA:
            // var data = action.data+5555;
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};
export const chat_message = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_CHAT_MESSAGE:
            return Object.assign(
                {},
                state,
                {data:action.data.info}
            );
        default:
            return state;
    }
};
export const chat_message_byID = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_CHAT_MESSAGE_BY_ID:
            var newData = action.payload.data[action.payload.chatID];
            // console.log(action.payload.data);
            // console.log(action.payload.chatID);
            // console.log(newData);
            return Object.assign(
                {},
                state,
                {data:newData}
            );
        default:
            return state;
    }
};

export const save_messages = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_SAVE_MESSAGES:
            return Object.assign(
                {},
                state,
                {data:action.data}
            );
        default:
            return state;
    }
};
