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

