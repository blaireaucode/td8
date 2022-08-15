/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import update from "immutability-helper"
import {v4 as uuidv4} from "uuid"
import default_game from "./default_game";

export function create_new_game() {
    const saves = JSON.parse(global.localStorage.getItem('td8_save'));
    let i = 0;
    for (let save in saves) {
        const s = saves[save];
        if (s.name === undefined) continue;
        if (s.name.startsWith("default")) {
            i+=1;
        }
    }
    let new_game = JSON.parse(JSON.stringify(default_game))
    new_game.id = uuidv4();
    new_game = update(new_game, {date: {$set: new Date().toJSON()}});
    if (i!== 0){
        new_game = update(new_game, {name: {$set: "default_"+i}});
    }
    console.log('Create a new game', new_game);
    return new_game;
}
