/**
 * Created by zerowolf on 2017/12/6.
 */
import * as types from '../../actions/Types';

export const Pair = (state = {}, action) => {
    switch (action.type) {
        case types.ACTION_Pair:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};