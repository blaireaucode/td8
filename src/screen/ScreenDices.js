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
import HelpCollapsible from "../components/HelpCollapsible";
import C from "../helpers/C";
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';

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
        this.state = {help: true};
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
        this.setState({}); // to trigger the 'x'
    }

    render() {
        let reroll = '';
        let e = false;
        let n = 0;
        let trash = '';
        let erase = '';
        if (diceBox.canvas.style.display === "block") erase = '✗';
        if (this.props.game.options.dice_results.rolls) {
            for (let r of this.props.game.options.dice_results.rolls) {
                if (r.to_reroll) n += 1;
            }
            if (n === 1) {
                reroll = 'Relancer un dé';
                e = true;
            }
            if (n > 1) {
                reroll = 'Relancer ' + n + ' dés';
                e = true;
            }
            trash =
                <span className={'dice-trash'}><L onClick={this.remove_dice}><DeleteIcon fontSize={'small'}/></L></span>
        }
        return (
            <div>
                <C width={'25ch'}>
                    <L onClick={this.throw_dice}>Lancer tous les dés</L>
                    <C width={'1ch'}/>
                    <L onClick={this.erase_dice}>{erase}</L>
                </C>

                <L onClick={this.reroll} enabled={e}>{reroll}</L> <p/>
                <p/>

                <AllDicesResults/>

                {trash}

                <p/>
                <p/>
                <HelpCollapsible>
                    <span>
                        Une fois les dés lancés, sélectionnez les dés à relancer. <p/>
                        Les flèches servent à déplacer les dés pour mieux repérer des configurations.<p/>
                    </span>
                </HelpCollapsible>
                <p/>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenDices)
