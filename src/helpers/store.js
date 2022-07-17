/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import {createStore} from 'redux'
import * as at from './action_types'
import * as gr from './action_reducers'

//import {create_new_game} from "./helpers_hero";

const store = setupStore()
export const store_name = 'td8_save'
export default store

export function defaultSaves() {
    /*
    // create a new game
    const new_game = create_new_game();
    // create a default list of saves
    let saves = {current: new_game.id};
    saves[new_game.id] = new_game;
    return saves;

     */
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

export function setupStore() {
    // read from local store (if exist), or start with default
    /*const saves = read_saves_in_store();
    const initialState = saves[saves['current']];

     */
    const initialState = {};

    //console.log('load save', initialState);

    // list of action
    const rootReducer = (state = initialState, action) => {
        switch (action.type) {
            case at.SET_GAME:
                return gr.set_game(state, action.value);
            default:
                return state;
        }
    };

    return createStore(rootReducer);
}

