import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Navigator } from './Navigator';

const AppNavigator = ({dispatch, nav}) => {
    return <Navigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
};
  
const mapStateToProps = state => ({
        nav: state.RS_Nav,
});

export default connect(mapStateToProps)(AppNavigator);