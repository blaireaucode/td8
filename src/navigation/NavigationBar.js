/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import {connect} from "react-redux";

class NavigationBar extends Component {

    render() {
        return (
            <div>
                <TopBar/>
                <LeftBar/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);