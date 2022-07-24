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

class TopBar extends Component {


    render() {
        return (
            <div id="topbar">
               <span className={'top_bar'}>~ La Terre des Huit ~</span>
            </div>
        );
    }
}

export default TopBar;