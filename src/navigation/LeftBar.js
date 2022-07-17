/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import L from "./L";
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import {connect} from "react-redux";

class LeftBar extends Component {

    render() {
        return (
            <div id="sidebar">
                <div className="vertical_line"/>
                <L to={'/'}>root</L><p/>
                <L to={'/debug'}>debug</L><p/>
                <L to={'/about'}>about</L><p/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftBar);