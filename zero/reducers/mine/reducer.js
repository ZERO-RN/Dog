/**
 * Created by zerowolf on 2017/12/6.
 */
import * as types from '../../actions/Types';

export const mine = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_MINE:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};