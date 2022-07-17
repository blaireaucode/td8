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
        startingHeight: 6,
        throwForce: 4,
        spinForce: 5,
        lightIntensity: 0.9,
        scale:20
    }
);

diceBox.init().then(() => {
    console.log('in dicebox init');
})


class RollDice extends Component {

    constructor(props) {
        super(props);
        this.throw_dice = this.throw_dice.bind(this);
        this.get_result = this.get_result.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {dice_flag: false};
    }

    throw_dice() {
        console.log('dice go');
        this.setState({dice_flag: true});
        diceBox.roll('1d20');
        diceBox.onRollComplete = (results) => {
            console.log('results', results);
            this.get_result(results);
        }
        diceBox.show();
    }

    get_result(results) {
        console.log('get results', results);
    }

    handleClose() {
        console.log('close');
        this.setState({dice_flag: false})
        diceBox.hide();
    }

    render() {
        console.log('state', this.state, diceBox);
        return (
            <div>
                <L onClick={this.throw_dice}> dice </L> /
                <L onClick={this.handleClose}> close </L>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RollDice)
