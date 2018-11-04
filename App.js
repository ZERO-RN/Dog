/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Provider,connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AllReducers from './zero/reducers/AllReducers';
import AppNavigator from './zero/navigator/AppNavigator';


const store = createStore(
    AllReducers,
    applyMiddleware(thunk)
);

// store.dispatch();

import Splash from './zero/containers/splash/Splash';

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            showSplash: true
        };
    }

    componentWillMount() {

        let timer = setTimeout(() => {
            this.setState({
                showSplash: false
            });
            clearTimeout(timer);
        }, 5000);
    }


    render() {
        return (
            // this.state.showSplash ? <Splash />
            //     :
                <Provider store={store}>
                    <AppNavigator/>
                </Provider>
        )
            ;
    }

}






