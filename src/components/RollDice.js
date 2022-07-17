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


class RollDice extends Component {

    constructor(props) {
        super(props);
        this.throw_dice = this.throw_dice.bind(this);
        this.get_dice_result = this.get_dice_result.bind(this);
        this.remove_dice = this.remove_dice.bind(this);
        this.state = {dice_result: false};
    }

    throw_dice() {
        console.log('dice go');
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
    }

    remove_dice() {
        console.log('close');
        this.setState({dice_result: false})
        diceBox.hide();
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
                <L onClick={this.throw_dice}> dice </L> /
                <L onClick={this.remove_dice}> close </L> {r}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RollDice)
