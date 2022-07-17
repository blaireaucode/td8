/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import {close_dice_ui, create_D100_rolling_dices, create_D10_rolling_dice} from '../helpers/helpers_dice';
//import { Dice } from "./components/diceBox";
import DiceBox from '@3d-dice/dice-box'
import ReactModal from "react-modal";

const diceBox = new DiceBox("#dice-box",
    {
        id: "dice-canvas", // canvas element id
        assetPath: "/assets/dice-box/",
        startingHeight: 8,
        throwForce: 6,
        spinForce: 5,
        lightIntensity: 0.9
    }
);


diceBox.init().then(() => {
    console.log('in dicebox init');
    //diceBox.roll('1d20');
    document.addEventListener("mousedown", () => {
        console.log('mousedown');
        const diceBoxCanvas = document.getElementById("dice-canvas");
        console.log(diceBoxCanvas);
        if (window.getComputedStyle(diceBoxCanvas).display !== "none") {
            console.log('hide clear');
            const r = diceBox.getRollResults();
            console.log('result', r);
            //diceBox.remove();
            //diceBox.clear();
            //diceBox.hide();//.clear();
            //DiceResults.clear();
        }
    });

})

class DiceRoller extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.start = this.start.bind(this);
        //this.start();
    }

    componentDidMount() {
        console.log('DiceRoller componentDidMount ', this.props);
        //this.start();
    }

    close() {
        console.log('i am in close');
    }

    start() {
        console.log('start');
        //diceBox.roll('1d20');
    }

    render() {
        //const dui = create_D100_rolling_dices(12);////this.props.game.options.dice_ui;
        const dui = create_D10_rolling_dice(3);////this.props.game.options.dice_ui;
        const dices = dui;//.dices;
        console.log("DiceRoller dices", dices);
        //this.start();
        return (
            <div>
                before

                after
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceRoller)
