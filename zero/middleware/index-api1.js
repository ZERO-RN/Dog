/**
 * @author ling
 * @email helloworld3q3q@gmail.com
 * @create date 2017-05-16 08:34:36
 * @modify date 2017-05-16 08:34:36
 * @desc [description]
*/
// import { fetchLoading, initHotshow, navigator } from '../actions/hotshow-action';

export function initFetch1(action) {
	return (url,chatID) => {
		var chatID1 = chatID;
		return (dispatch) => {fetch(url).then(res => res.json())
			.then(json => {
				dispatch(action(json));
                console.log(json.info.chatID1);
				// dispatch(fetchLoading(false));
				console.log(json.info.A11111)
			}).catch(msg => console.log('recommendList-err  '+ msg));
		}
	}
}