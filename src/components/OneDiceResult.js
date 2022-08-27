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
import {
    immutablySwapItems,
    update_g_dice_results,
    update_g_dice_results_rolls,
    update_g_dice_to_reroll
} from "../helpers/helpers_update";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import L from "../navigation/L";

class OneDiceResult extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onLeft = this.onLeft.bind(this);
        this.onRight = this.onRight.bind(this);
    }

    onLeft() {
        const i = this.props.i;
        const j = i === 0 ? this.props.game.options.dice_results.qty - 1 : i - 1;
        const rolls = immutablySwapItems(this.props.game.options.dice_results.rolls, i, j);
        const dr = update(this.props.game.options.dice_results, {rolls: {$set: rolls}});
        let g = update_g_dice_results(this.props.game, dr);

        //const to_reroll = immutablySwapItems(this.props.game.options.dice_to_reroll, i, j);
        //g = update_g_dice_to_reroll(g, to_reroll);

        this.props.set_game(g);
    }

    onRight() {
        const i = this.props.i;
        const j = i === this.props.game.options.dice_results.qty - 1 ? 0 : i + 1;

        const rolls = immutablySwapItems(this.props.game.options.dice_results.rolls, i, j);
        const dr = update(this.props.game.options.dice_results, {rolls: {$set: rolls}});
        let g = update_g_dice_results(this.props.game, dr);

        //const to_reroll = immutablySwapItems(this.props.game.options.dice_to_reroll, i, j);
        //g = update_g_dice_to_reroll(g, to_reroll);

        this.props.set_game(g);
    }

    onChange(event) {
        //console.log('eve', event);
        const c = event.target.checked;
        /*
        const next_roll = update(this.props.game.options.dice_to_reroll, {[this.props.dice.rollId]: {$set: c}});
        //console.log('nr', next_roll);
        const g = update_g_dice_to_reroll(this.props.game, next_roll);

         */

        const rolls = update(this.props.game.options.dice_results.rolls,
            {[this.props.i]: {to_reroll: {$set: c}}});
            //{[this.props.dice.rollId]: {to_reroll: {$set: c}}});
        console.log('rolls', rolls);
        const g = update_g_dice_results_rolls(this.props.game, rolls);

        this.props.set_game(g);
    }

    render() {
        const dice = this.props.dice;
        //const c = this.props.game.options.dice_to_reroll[this.props.dice.rollId];
        //const c = this.props.game.options.dice_results.rolls[this.props.dice.rollId].to_reroll;
        const c = this.props.game.options.dice_results.rolls[this.props.i].to_reroll;
        console.log('c', c, this.props.i, this.props.dice.rollId);
        //console.log('dice', dice, c);
        const l = <span className={'dice-label'}>{dice.value}</span>
        return (
            <span>
                <span className={'dice-left'}><L onClick={this.onLeft}> <ArrowLeftIcon/></L></span>
                <FormControlLabel
                    control={<Checkbox onChange={this.onChange}
                                       checked={c}
                                       checkedIcon={<span className={'dice-txt2'}>relancer</span>}
                                       icon={<span className={'dice-txt1'}></span>}
                                       label={dice.value}/>}
                    label={l}/>
                <span className={'dice-right'}><L onClick={this.onRight}><ArrowRightIcon/> </L></span>
                <C width={'4ch'}/>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneDiceResult)
