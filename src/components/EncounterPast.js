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
import FH from "../helpers/FH";
import InputEncounterPast from "./InputEncounterPast";
import C from "../helpers/C";
import L from "../navigation/L";
import update from "immutability-helper";

class EncounterPast extends Component {

    constructor(props) {
        super(props);
        this.removeEncounter = this.removeEncounter.bind(this);
    }

    removeEncounter() {
        const idx = this.props.e.nb;
        let g = update(this.props.game, {
            past_encounters: {
                $splice: [[idx, 1]]
            }
        });
        for (let e in g.past_encounters) {
            g = update(g, {
                past_encounters: {
                    [e]: {nb: {$set: e}}
                }
            });
        }
        this.props.set_game(g);
    }

    render() {
        const e = this.props.e;
        console.log('ee', e)
        if (!("name" in e)) return "";
        return (
            <span>
                <C width={'3ch'}>{e.nb}</C>
                <C width={'3ch'}><L onClick={this.removeEncounter}>✗</L></C>

                <InputEncounterPast e={e} f={'name'} width={'28ch'}/>
                <C width={'1ch'}/>

                <InputEncounterPast e={e} f={'pv_initial'} width={'5ch'} type={'number'}/>
                <C width={'3ch'}/>

                <InputEncounterPast e={e} f={'damage'} width={'5ch'} type={'number'}/>
                <C width={'3ch'}/>

                <InputEncounterPast e={e} f={'defense'} width={'5ch'} type={'number'}/>
                <C width={'2ch'}/>

                <InputEncounterPast e={e} f={'attributes'} width={'55ch'}/>
                <C width={'1ch'}/>

                <br/>
                <C width={'3ch'}/>
                <C width={'3ch'}>📜</C>
                <InputEncounterPast e={e} f={'com'} width={'95ch'}/>
                <hr style={{borderColor: 'var(--bge)'}}/>
                <br/>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EncounterPast)
