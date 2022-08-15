/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import * as st from '../helpers/store';
import L from '../navigation/L.js';
import {create_new_game} from "../helpers/helpers_game";

class ScreenResetStore extends Component {

    constructor(props) {
        super(props);
        this.clearStore = this.clearStore.bind(this);
        this.clearStore();
    }

    clearStore() {
        console.log('Clearing store');
        global.localStorage.removeItem(st.store_name);
        const new_game = create_new_game();
        this.props.set_game(new_game);
        console.log('done.');
    }

    render() {
        return (
            <div>
                Store has been cleared.

                <L onClick={this.clearStore}> ⚠ Clear store ⚠</L>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenResetStore)
