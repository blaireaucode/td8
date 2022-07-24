/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

const default_game = {

    // Those value should be change (in new_game)
    id: 'default',
    date: 'None',
    name: 'default',

    // options for the UI (dice, map status etc)
    options: {
        dice_ui: {
            open: false,
            dices: []
        }
    },

    hero: {
        name: 'votre nom',
        age: 30,
        origin: 'quelque part',
        location: 'Vernillane',
        class: 'métier',
        accomplishment: {
            major: '?',
            minor1: '?',
            minor2: '?',
        },
        pv: '10',
        pv_max: '10',
        survival: '?'
    },

    items: {},
    equipped_items: {},
    skills: {},
    log: '',

}

export default default_game