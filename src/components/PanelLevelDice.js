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

class PanelLevelDice extends Component {
    render() {
        const h = this.props.game.hero;
        const l = h.level;
        let txt = '5';
        if (l > 10) {
            txt = '5+1=6'
        }
        if (l > 20) {
            txt = '5+2=7'
        }
        if (l > 30) {
            txt = '5+3=8'
        }
        return (
            <span>
                 🎲 {txt}
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelLevelDice)
