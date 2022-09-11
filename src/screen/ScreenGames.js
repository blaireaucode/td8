/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import * as st from '../helpers/store';
import L from '../navigation/L.js';
import SavedGame from '../components/SavedGame';
import {create_new_game} from "../helpers/helpers_game";
import {add_diane, read_saves_in_store} from "../helpers/store";

class ScreenGames extends Component {

    constructor(props) {
        super(props);
        this.clearStore = this.clearStore.bind(this);
        this.reset = this.reset.bind(this);
        this.update_store = this.update_store.bind(this);
        this.add_Diane = this.add_Diane.bind(this);
        this.state = {store: st.read_saves_in_store()};
    }

    update_store() {
        this.setState({store: st.read_saves_in_store()});
    }

    add_Diane() {
        let saves = read_saves_in_store();
        add_diane(saves);
        this.clearStore();
        global.localStorage.setItem('td8_save', JSON.stringify(saves));
        this.update_store();
    }

    clearStore() {
        global.localStorage.removeItem(st.store_name);
        this.update_store();
    }

    reset() {
        const new_game = create_new_game();
        this.props.set_game(new_game);
        this.update_store();
    }

    render() {
        const saves = this.state.store;
        let list = [];
        for (let save in saves) {
            if (save === 'current') continue;
            let s = saves[save];
            list.push(<span key={s.id}>
                        <SavedGame current={saves.current} update_store={this.update_store} save={s}/>
                        <br/>
                    </span>);
        }
        return (
            <div>
                Sauvegardes:<p/>
                {list}
                <br/>
                <L onClick={this.reset}>Nouvelle partie</L><p/>
                <L onClick={this.clearStore}> ⚠ tout effacer ⚠</L><p/>
                <L onClick={this.add_Diane}> Diane </L>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenGames)
