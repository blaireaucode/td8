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

export default NavigationBar;