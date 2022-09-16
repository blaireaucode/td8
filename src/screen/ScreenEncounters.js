/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props'
import EncounterPast from "../components/EncounterPast";
import update from "immutability-helper";
import FH from "../helpers/FH";
import C from "../helpers/C";

class ScreenEncounters extends Component {

    constructor(props) {
        super(props);
        this.cleanAllEncounters = this.cleanAllEncounters.bind(this);
    }

    cleanAllEncounters() {
        const g = update(this.props.game,
            {past_encounters: {$set: []}});
        this.props.set_game(g);
    }

    render() {
        const g = this.props.game;
        const encounters = [];
        let i = 0;
        for (let e of g.past_encounters) {
            encounters.push(<EncounterPast e={e} key={i}/>)
            i += 1;
        }
        return (
            <span>
                {/*<L onClick={this.cleanAllEncounters}>CLEAN</L>*/}
                Liste des rencontres passées
                <p/>
                <br/>
                <C width={'6ch'}/>
                <FH w={'25.5ch'}>Nom</FH>
                <FH w={'5.5ch'}>PV</FH>
                <FH w={'7.5ch'}>Dégâts</FH>
                <FH w={'8ch'}>Défense</FH>
                <FH w={'8ch'}>Attributs</FH>
                <hr style={{borderColor: 'var(--bge)'}}/>
                <p/>
                {encounters}
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenEncounters)
