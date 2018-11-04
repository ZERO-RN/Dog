/**
 * Created by zerowolf on 2017/12/6.
 */
import {ACTION_SPLASH} from '../../actions/Types';

export const splash = (state = {}, action) => {
    switch (action.type) {
        case ACTION_SPLASH:
            return Object.assign(
                {},
                state,
                {data: action.data}
            );
        default:
            return state;
    }
};