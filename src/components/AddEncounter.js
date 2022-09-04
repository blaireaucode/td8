/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import InputHero from "./InputHero";
import C from "../helpers/C";
import PanelBloc from "./PanelBloc";
import L from "../navigation/L";
import {default_encounter, default_technic} from "../helpers/default_game";
import {v4 as uuidv4} from "uuid";
import update from "immutability-helper";

class AddEncounter extends Component {

    constructor(props) {
        super(props);
        this.addEncounter = this.addEncounter.bind(this);
    }

    addEncounter() {
        let d = JSON.parse(JSON.stringify(default_encounter));
        d.id = uuidv4();
        const g = update(this.props.game, {encounter: {$set: d}});
        this.props.set_game(g);
    }

    render() {
        const e = this.props.game.encounter;
        if ("name" in e) return "";
        return (
            <span>
                Nouveau combat: <L onClick={this.addEncounter}>⊕</L>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEncounter)
