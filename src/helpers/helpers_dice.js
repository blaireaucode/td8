/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import update from "immutability-helper";
import {update_g_options} from './helpers_update';
import DiceBox from '@3d-dice/dice-box';

const diceBox = new DiceBox("#dice-box",
    {
        id: "dice-canvas", // canvas element id
        assetPath: "/assets/dice-box/",
        startingHeight: 6,
        throwForce: 4,
        spinForce: 5,
        lightIntensity: 0.9
    }
);


diceBox.init().then(() => {
    console.log('in dicebox init');
})


export default diceBox;