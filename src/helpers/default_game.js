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
        dice_nb: 5,
        dice_results: false,

        // position of the blocks
        ".hero": [0, 30, 0, 0],
        ".acc": [426, 228, 0, 0],
        ".pv": [426, 30, 0, 0],
        ".caract": [0, 228, 0, 0],
        ".technic": [0, 490, 0, 0]
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

        robustness: 10,
        dexterity: 16,
        beauty: 12,
        will_power: 15,
        intelligence: 10,
        erudition: 7,
        charisma: 11,

        technics: [],
    },

    encounter: {},

    items: {},
    equipped_items: {},
    skills: {},
    log: '',

}
export default default_game

export const default_encounter = {
    id: false,
    name: 'Pillard des cavernes',
    pv: 25,
    damage: 5,
    defense: 2,
    attributes: 'Agressivité (dégâts +2) ; Allonge (-1 dé lors des 2 premiers rounds)'
}

export const default_technic =
    {
        id: false,
        name: 'technique',
        dice: 5,
        combination: 'combinaison',
        damage: 1,
        effect: 'effets'
    }

export const diane_technic =
    [
        {
            id: false,
            name: 'Mille épines',
            dice: 8,
            combination: '?',
            damage: 0,
            effect: '?'
        },
        {
            id: false,
            name: 'Pluie de lames',
            dice: 7,
            combination: '?',
            damage: 14,
            effect: '?'
        },
        {
            id: false,
            name: 'Tornade ciselée',
            dice: 6,
            combination: '?',
            damage: 14,
            effect: '?'
        },
        {
            id: false,
            name: 'Faille invisible',
            dice: 5,
            combination: '4 dés <= 8',
            damage: 6,
            effect: 'Démantèlement 3'
        },
        {
            id: false,
            name: 'Aiguille acérée',
            dice: 5,
            combination: '2 dés <= 4',
            damage: 5,
            effect: 'Hémorragie 2'
        },
        {
            id: false,
            name: 'Feinte de corps',
            dice: 5,
            combination: 'un 6',
            damage: 2,
            effect: ''
        },
        {
            id: false,
            name: 'Grâce du chat',
            dice: 5,
            combination: '3 dés <=5',
            damage: 5,
            effect: 'Accélération 1'
        },
    ]
/*


*/