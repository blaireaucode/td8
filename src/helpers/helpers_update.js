/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import update from "immutability-helper";

/* Update ONLY here, no set_game */

// update a dic
export function update_dic(dic, field_name, value) {
    return update(dic, {[field_name]: {$set: value}});
}

// update one hero field
export function update_g_hero(game, field_name, value) {
    return update(game, {hero: {[field_name]: {$set: value}}});
}

// update the options
export function update_g_options(game, options) {
    return update(game,
        {options: {$set: options}});
}

export function update_g_dice_results(game, res) {
    const options = update(game.options, {dice_results: {$set: res}});
    return update_g_options(game, options);
}

export function update_g_dice_results_rolls(game, res) {
    const options = update(game.options, {dice_results: {rolls: {$set: res}}});
    return update_g_options(game, options);
}

export function update_g_dice_to_reroll(game, res) {
    const options = update(game.options, {dice_to_reroll: {$set: res}});
    return update_g_options(game, options);
}

export function immutablySwapItems(items, firstIndex, secondIndex) {
    // https://stackoverflow.com/questions/41127548/how-do-i-swap-array-elements-in-an-immutable-fashion-within-a-redux-reducer
    // Constant reference - we can still modify the array itself
    const results = items.slice();
    const firstItem = items[firstIndex];
    results[firstIndex] = items[secondIndex];
    results[secondIndex] = firstItem;

    return results;
}