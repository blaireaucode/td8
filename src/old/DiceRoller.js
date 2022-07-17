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
import DicesAnimation from '../dice/DicesAnimation2';

class DiceRoller extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);

    }

    close() {
        console.log('i am in close');
    }

    render() {
        //const dui = create_D100_rolling_dices(12);////this.props.game.options.dice_ui;
        const dui = create_D10_rolling_dice(3);////this.props.game.options.dice_ui;
        const dices = dui;//.dices;
        console.log("DiceRoller dices", dices);
        return (
            <div>
                before
                <DicesAnimation
                    height='380px'
                    posY={5}
                    scaleFactor={1.0}
                    onClick={this.close}
                    dices={dices}
                />
                after
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceRoller)
