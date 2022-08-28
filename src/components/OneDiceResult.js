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
import update from "immutability-helper";
import {
    dice_to_reroll_flag,
    immutablySwapItems,
    update_g_dice_results,
    update_g_dice_results_rolls, update_g_swap_dice, update_g_swap_dice_left, update_g_swap_dice_right
} from "../helpers/helpers_update";
import L from "../navigation/L";

class OneDiceResult extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onLeft = this.onLeft.bind(this);
        this.onRight = this.onRight.bind(this);
    }

    onLeft() {
        const g = update_g_swap_dice_left(this.props.game, this.props.i);
        this.props.set_game(g);
    }

    onRight() {
        const g = update_g_swap_dice_right(this.props.game, this.props.i);
        this.props.set_game(g);
    }

    onChange() {
        const c = !dice_to_reroll_flag(this.props.game, this.props.i);
        const rolls = update(this.props.game.options.dice_results.rolls,
            {[this.props.i]: {to_reroll: {$set: c}}});
        const g = update_g_dice_results_rolls(this.props.game, rolls);
        this.props.set_game(g);
    }

    render() {
        const dice = this.props.dice;
        const c = dice_to_reroll_flag(this.props.game, this.props.i);
        const l = <span className={'dice-label'}>{dice.value}</span>
        const ci = c ? <span className={'dice-reroll'}>🎲 </span> : '';
        return (
            <span>
                <span className={'dice-left'}><L onClick={this.onLeft}> ⬅ </L></span>
                <L onClick={this.onChange}>
                <C width={'2ch'}/>
                    {ci}
                    {l}
                    <C width={'2ch'}/>
                </L>
                <span className={'dice-right'}><L onClick={this.onRight}> ⮕ </L></span>
                <C width={'4ch'}/>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneDiceResult)
