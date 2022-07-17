/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import L from "./L";
import C from "../helpers/C";
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from "../helpers/default_props";

class TopBar extends Component {

    render() {
        return (
            <div id="topbar">
                I am the top bar
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);