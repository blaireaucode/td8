/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as at from './action_types'

export const set_game =
    (value) => ({
        type: at.SET_GAME,
        value: value
    });
