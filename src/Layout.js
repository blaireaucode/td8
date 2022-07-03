/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React from 'react'
import {Route} from 'react-router-dom'
import {Navigate, Outlet} from 'react-router-dom';
import LayoutBothBar from './LayoutBothBar'
import {HashRouter as Router} from 'react-router-dom'

const Layout = ({component: Component, ...rest}) => {
    //   {/*<Route {...rest} render={matchProps => (*/    }
    return (
        <div>
            I am in route
            <LayoutBothBar >
                {this.props.children}
            </LayoutBothBar>

        </div>
    );
};

export default Layout;
