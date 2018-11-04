/**
 * Created by zerowolf on 2017/11/15.
 */

import * as Types from './Types';
import { recommend } from '../middleware/apis';
import {initFetch} from '../middleware/index-api';


//Home
export const sign = (data) => {
    return {
        type: Types.ACTION_SIGN,
        // data:(data===true) ? false : true
        data
    };
};



