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
import C from "../helpers/C";
import OneDiceResult from "./OneDiceResult";

class AllDicesResults extends Component {
    render() {
        const dr = this.props.game.options.dice_results;
        if (dr === false) return '';
        const rolls = dr.rolls;
        const d = [];
        let i = 0;
        for (let r of rolls) {
            d.push(<OneDiceResult dice={r} i={i} key={i}/>)
            i += 1;
        }
        return (
            <span>
                <C width={'1ch'}/>
                {d}
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllDicesResults)
