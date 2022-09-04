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

export function merge_dice_results(game, new_res) {
    let current_res = JSON.parse(JSON.stringify(game.options.dice_results));
    if (current_res !== false) {
        let i = 0;
        for (let roll of current_res.rolls) {
            if (roll.to_reroll === true) {
                roll.value = new_res.rolls[i].value;
                i += 1;
            }
            roll['to_reroll'] = false;
        }
        current_res.nb_rolls += 1;
    } else {
        current_res = new_res;
        for (let roll of current_res.rolls) roll['to_reroll'] = false;
        current_res.nb_rolls = 1;
    }
    return current_res;
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

export function update_g_swap_dice(game, i, j) {
    const rolls = immutablySwapItems(game.options.dice_results.rolls, i, j);
    const dr = update(game.options.dice_results, {rolls: {$set: rolls}});
    return update_g_dice_results(game, dr);
}

export function update_g_swap_dice_left(game, i) {
    const j = i === 0 ? game.options.dice_results.qty - 1 : i - 1;
    return update_g_swap_dice(game, i, j);
}

export function update_g_swap_dice_right(game, i) {
    const j = i === game.options.dice_results.qty - 1 ? 0 : i + 1;
    return update_g_swap_dice(game, i, j);
}

export function dice_to_reroll_flag(game, i) {
    return game.options.dice_results.rolls[i].to_reroll;
}

