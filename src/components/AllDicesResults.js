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
import InputTxt from "./InputTxt";
import C from "../helpers/C";
import PanelBloc from "./PanelBloc";
import OneDiceResult from "./OneDiceResult";

class AllDicesResults extends Component {
    render() {
        const dr = this.props.game.options.dice_results;
        //console.log('dr', dr);
        if (dr === false) return '';
        const rolls = dr.rolls;
        //console.log('res', rolls);
        const d = [];
        for (let r of rolls) {
            //console.log('r', r);
            d.push(<OneDiceResult dice={r} key={r.rollId}/>)
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
