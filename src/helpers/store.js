/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import {configureStore} from '@reduxjs/toolkit';
import * as at from './action_types';
import * as gr from './action_reducers';
import {create_new_game} from "./helpers_game";
import default_game from "./default_game";

const store = setupStore()
export const store_name = 'td8_save'
export default store

export function setupStore() {
    /*
        Called at the beginning of the App
     */
    // read from local store (if exist), or start with default
    const saves = read_saves_in_store();
    console.log('load saves', saves);
    // tentative merge ? no for deep dict
    //const initialState = Object.assign({}, default_game, saves[saves['current']]);
    const initialState = saves[saves['current']];
    //const initialState = {};
    console.log('load save', initialState);

    // list of action
    const rootReducer = (state = initialState, action) => {
        switch (action.type) {
            case at.SET_GAME:
                return gr.set_game(state, action.value);
            default:
                return state;
        }
    };

    return configureStore({reducer: rootReducer})
}

export function read_saves_in_store() {
    if (global.localStorage.getItem('td8_save') !== null) {
        return JSON.parse(global.localStorage.getItem('td8_save'));
    } else {
        console.log('Cannot find local storage td8_save : use default');
        const saves = defaultSaves();
        global.localStorage.setItem('td8_save', JSON.stringify(saves));
        return saves;
    }
}


export function defaultSaves() {
    // create a new game
    const new_game = create_new_game();
    // create a default list of saves
    // and set this new game as the current one
    let saves = {current: new_game.id};
    saves[new_game.id] = new_game;
    return saves;
}

