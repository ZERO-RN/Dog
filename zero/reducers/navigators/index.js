import {NavigationActions} from 'react-navigation';
import {Alert} from 'react-native'
import {Navigator} from '../../navigator/Navigator';

export const nav = (state, action) => {
    switch (action.type) {

        case 'Home_One':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Home_One'}),
                {...state, data: action.data}
            );
        case 'Wallet':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Wallet'}),
                {...state, data: action.data}
            );
        case 'CardCoupons':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'CardCoupons'}),
                {...state, data: action.data}
            );
        case 'Invite':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Invite'}),
                {...state, data: action.data}
            );
        case 'Heart':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Heart'}),
                {...state, data: action.data}
            );
        case 'ChatRoom':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'ChatRoom'}),
                {
                    ...state, chatID: action.chatID, callBack: (text) => {
                    action.callBack(text)
                }
                }
            );
        case 'Splash':
            return Navigator.router.getStateForAction(
                NavigationActions.navigate({routeName: 'Splash'}),
                {
                    ...state, chatID: action.chatID, callBack: (text) => {
                    action.callBack(text)
                }
                }
            );

        default:
            return Navigator.router.getStateForAction(action, state) || state;
    }
}
