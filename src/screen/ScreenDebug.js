/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import RollDice from "../dice/RollDice";


class ScreenDebug extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('state', this.state);
        return (
            <div>
                I am debug screen. <p/>
                <RollDice/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenDebug)
