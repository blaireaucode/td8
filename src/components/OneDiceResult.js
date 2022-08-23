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
import {Checkbox, FormControlLabel} from "@mui/material";
import update from "immutability-helper";
import {update_g_dice_to_reroll} from "../helpers/helpers_update";

class OneDiceResult extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        //console.log('eve', event);
        const c = event.target.checked;
        const next_roll = update(this.props.game.options.dice_to_reroll, {[this.props.dice.rollId]: {$set: c}});
        //console.log('nr', next_roll);
        const g = update_g_dice_to_reroll(this.props.game, next_roll);
        this.props.set_game(g);
    }

    render() {
        const dice = this.props.dice;
        const c = this.props.game.options.dice_to_reroll[this.props.dice.rollId];
        //console.log('dice', dice, c);
        return (
            <span>
                <FormControlLabel
                    control={<Checkbox onChange={this.onChange}
                                       checked={c}
                                       checkedIcon={<span className={'dice-txt1'}>(à garder)</span>}
                                       icon={<span className={'dice-txt2'}>à relancer</span>}
                                       label={dice.value}/>} label={dice.value}/>
                <C width={'3ch'}/>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneDiceResult)
