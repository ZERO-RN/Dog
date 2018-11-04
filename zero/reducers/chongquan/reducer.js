/**
 * Created by zerowolf on 2017/12/6.
 */
import * as types from '../../actions/Types';

export const ChongQuan = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_ChongQuan:
            return Object.assign(
                {},
                state,
                {data: !action.data}
            );
        default:
            return state;
    }
};
export const pay_manage = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_PAY_MANAGE:
            return Object.assign(
                {},
                state,
                {data: !action.bool}
            );
        default:
            return state;
    }
};
export const chongquan_navigation = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_CHONGQUAN_NAVIGATION:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};