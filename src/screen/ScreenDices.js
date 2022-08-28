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
import L from "../navigation/L";
import DiceBox from "@3d-dice/dice-box";
import {merge_dice_results, update_g_dice_results} from "../helpers/helpers_update";
import AllDicesResults from "../components/AllDicesResults";

const diceBox = new DiceBox("#dice-box",
    {
        id: "dice-canvas", // canvas element id
        assetPath: "/assets/dice-box/",
        startingHeight: 7,
        throwForce: 6,
        spinForce: 5,
        lightIntensity: 0.9,
        scale: 6,
        gravity: 1,
        mass: 4,
        friction: 0.8,
        restitution: 0.1, // 0.6
        linearDamping: 0.3, // 0.5
        angularDamping: 0.2, // 0.2
        settleTimeout: 2000
    }
);

diceBox.init().then(() => {
    //console.log('in dicebox init');
})

class ScreenDices extends Component {

    constructor(props) {
        super(props);
        this.throw_dice = this.throw_dice.bind(this);
        this.reroll = this.reroll.bind(this);
        this.get_dice_result = this.get_dice_result.bind(this);
        this.remove_dice = this.remove_dice.bind(this);
        this.erase_dice = this.erase_dice.bind(this);
        diceBox.onRollComplete = (results) => {
            this.get_dice_result(results);
        }
    }

    throw_dice() {
        const g = update_g_dice_results(this.props.game, false);
        this.props.set_game(g);
        diceBox.roll('5d6'); // FIXME number of dice
        diceBox.show();
    }

    get_dice_result(dice_results) {
        const new_res = dice_results[0];
        const current_res = merge_dice_results(this.props.game, new_res);
        const g = update_g_dice_results(this.props.game, current_res);
        this.props.set_game(g);
    }

    reroll() {
        const res = this.props.game.options.dice_results.rolls;
        let n = 0;
        for (let d of res) {
            if (d.to_reroll === true) n += 1;
        }
        n = n.toString() + 'd6';
        diceBox.roll(n);
        diceBox.show();
    }

    remove_dice() {
        diceBox.hide();
        const g = update_g_dice_results(this.props.game, false);
        this.props.set_game(g);
    }

    erase_dice() {
        diceBox.hide();
    }

    render() {
        return (
            <div>
                <L onClick={this.throw_dice}> roll </L> /
                <L onClick={this.reroll}> reroll </L> /
                <L onClick={this.erase_dice}> erase </L> /
                <L onClick={this.remove_dice}> remove all </L>
                <p/>
                <AllDicesResults/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenDices)
