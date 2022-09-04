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
import InputEncounter from "./InputEncounter";
import FH from "../helpers/FH";
import C from "../helpers/C";
import L from "../navigation/L";
import DeleteIcon from "@mui/icons-material/Delete";
import update from "immutability-helper";

class Encounter extends Component {

    constructor(props) {
        super(props);
        this.removeEncounter = this.removeEncounter.bind(this);
    }

    removeEncounter() {
        const g = update(this.props.game, {encounter: {$set: {}}});
        this.props.set_game(g);
    }

    render() {
        const e = this.props.game.encounter;
        if (!("name" in e)) return "";
        let dead = "";
        let w = 52;
        if (e.pv <= 0) {
            dead = <C width={'3ch'}>💀</C>;
            w -= 3.3;
        }
        return (
            <div className={'block-encounter'}>
                <FH w={'10ch '}>Nom : </FH>
                {dead}
                <InputEncounter f={'name'} width={w + 'ch'}/>
                <C width={'1ch'}/>
                <L onClick={this.removeEncounter}><DeleteIcon fontSize={'small'}/></L>

                <br/>

                <FH w={'10ch '}>Attributs : </FH>
                <InputEncounter f={'attributes'} width={'56ch'}/>

                <br/>

                <FH w={'11ch '}>Points de vie : </FH>
                <InputEncounter f={'pv'} width={'5ch'} type={'number'}/>
                <C width={'10ch'}/>
                <FH w={'7ch'}>Dégâts : </FH>
                <InputEncounter f={'damage'} width={'5ch'} type={'number'}/>
                <C width={'10ch'}/>
                <FH w={'8ch'}>Défense : </FH>
                <InputEncounter f={'defense'} width={'5ch'} type={'number'}/>

                <p/>
                <C width={'15ch'}>---</C>
                <FH w={'18  ch'}>Round :<C width={'1ch'}/>
                    <InputEncounter f={'round'} width={'5ch'} type={'number'}/>
                </FH>

                <FH w={'19ch'}>Nombre de lancés:<C width={'1ch'}/>
                    <InputEncounter f={'roll'} width={'5ch'} type={'number'}/>
                </FH>
                <C width={'11ch'}/>
                <C width={'3ch'}>---</C>
                <br/>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Encounter)
