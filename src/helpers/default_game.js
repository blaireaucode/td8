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
        },
        ".hero": [0, 0, 0, 0],
        ".acc": [426, 188, 0, 0],
        ".pv": [426, 0, 0, 0],
        ".caract": [0, 188, 0, 0],
    },

    hero: {
        name: 'Diane',
        age: 22,
        origin: 'Les bois de Grandgifu',
        location: 'Leylee',
        class: 'Danseuse de Jade',
        acc_major: 'La justice', // étape, notes
        acc_minor1: 'La tempérance', // Atteindre 20 en volonté
        acc_minor2: 'La papesse',
        pv: 40,
        pv_max: 40,
        survival: 100, // %
        gold: 40,
        provisions: 8,
        level: 1,
        reput: 0,

        robustness: 1,
        dexterity: 1,
        beauty: 1,
        will_power: 1,
        intelligence: 1,
        erudition: 1,
        charisma: 1

    },

    items: {},
    equipped_items: {},
    skills: {},
    log: '',

}

export default default_game