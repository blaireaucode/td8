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
import ReactModal from "react-modal";
import DiceRoller from "../old/DiceRoller";
import * as Dice from "threejs-dice";
//import DiceRoller3 from "../dice/DiceRoller3";
import DiceBox from '@3d-dice/dice-box'


ReactModal.setAppElement('#root')

const style = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    content: {
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '41%',
        height: '40%',
        border: '0px solid #ccc',
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        background: 'rgba(255, 255, 255, 0.0)',
        //background: '#fff',
        //overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        //borderRadius: '4px',
        outline: 'none',
        //padding: '20px'
    }
}


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
    /*document.addEventListener("mousedown", () => {
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
    });*/
})

class ScreenDebug extends Component {

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
        console.log('state', this.state);
        return (
            <div>
                I am debug screen. <p/>
                <L onClick={this.throw_dice}> dice </L>
                <ReactModal
                    onRequestClose={this.handleClose}
                    shouldCloseOnOverlayClick={true}
                    isOpen={this.state.dice_flag} style={style} close>
                    {/*<DiceRoller/>*/}
                </ReactModal>
            </div>
        )
            ;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenDebug)
