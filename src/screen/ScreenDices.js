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
import {update_g_dice_results, update_g_options} from "../helpers/helpers_update";
import update from "immutability-helper";
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
        settleTimeout: 3000
    }
);

diceBox.init().then(() => {
    console.log('in dicebox init');
})


class ScreenDices extends Component {

    constructor(props) {
        super(props);
        this.throw_dice = this.throw_dice.bind(this);
        this.get_dice_result = this.get_dice_result.bind(this);
        this.remove_dice = this.remove_dice.bind(this);
        this.state = {dice_result: false};
    }

    throw_dice() {
        console.log('dice go');
        const g = update_g_dice_results(this.props.game, false);
        this.props.set_game(g);
        this.setState({dice_result: false});
        diceBox.roll('5d6');
        diceBox.onRollComplete = (results) => {
            console.log('onRollComplete');
            this.get_dice_result(results);
        }
        diceBox.show();
    }

    get_dice_result(results) {
        console.log('get results', results);
        this.setState({dice_result: results});
        const g = update_g_dice_results(this.props.game, results[0]);
        this.props.set_game(g);
    }

    remove_dice() {
        console.log('close');
        this.setState({dice_result: false})
        diceBox.hide();
        const g = update_g_dice_results(this.props.game, false);
        this.props.set_game(g);
    }

    render() {
        console.log('state', this.state, diceBox);
        let r = '';
        if (this.state.dice_result) {
            r = this.state.dice_result[0].rolls[0].value; // total
            console.log('dice value', r);
        }
        return (
            <div>
                <L onClick={this.throw_dice}> roll </L> /
                <L onClick={this.remove_dice}> remove all </L> {r}
                <p/>
                <AllDicesResults/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenDices)
