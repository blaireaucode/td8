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
import EncounterLog from "./EncounterLog";
import HelpCollapsible from "./HelpCollapsible";

class Encounter extends Component {

    constructor(props) {
        super(props);
        this.removeEncounter = this.removeEncounter.bind(this);
        this.logEncounter = this.logEncounter.bind(this);
    }

    removeEncounter() {
        const g = update(this.props.game, {encounter: {$set: {}}});
        this.props.set_game(g);
    }

    logEncounter() {
        let e = JSON.parse(JSON.stringify(this.props.game.encounter));
        e['nb'] = this.props.game.past_encounters.length;
        let g = update(this.props.game,
            {past_encounters: {$push: [e]}});
        g = update(g, {encounter: {$set: {}}});
        this.props.set_game(g);
    }

    render() {
        const e = this.props.game.encounter;
        if (!("name" in e)) return "";
        let dead = "";
        let w = 52;
        let to_log = "";
        let s = '';
        if (e.pv <= 0) {
            dead = <C width={'3ch'}>💀</C>;
            w -= 3.3;
            to_log = <L onClick={this.logEncounter}>Ajouter aux rencontres 📜 </L>;
            s = 'encounter-dead';
        }
        return (
            <div className={'block-encounter ' + s}>
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
                <InputEncounter f={'pv'} width={'5ch'} type={'number'}/>/
                <C width={'1ch'}/>
                <InputEncounter f={'pv_initial'} width={'5ch'} type={'number'}/>
                <C width={'6ch'}/>
                <FH w={'7ch'}>Dégâts : </FH>
                <InputEncounter f={'damage'} width={'5ch'} type={'number'}/>
                <C width={'7ch'}/>
                <FH w={'8ch'}>Défense : </FH>
                <InputEncounter f={'defense'} width={'5ch'} type={'number'}/>

                <br/>
                <EncounterLog/>

                <p/>
                <C width={'15ch'}></C>
                <FH w={'18  ch'}>Round :<C width={'1ch'}/>
                    <InputEncounter f={'round'} width={'5ch'} type={'number'}/>
                </FH>

                <FH w={'19ch'}>Nombre de lancés:<C width={'1ch'}/>
                    <InputEncounter f={'roll'} width={'5ch'} type={'number'}/>
                </FH>
                <C width={'11ch'}/>
                <HelpCollapsible>
                    Lorsque les PV sont à zéro, vous pourrez ajouter la rencontre dans la <L to={'/encounters'}>liste
                    des rencontres.</L>
                </HelpCollapsible>

                <C width={'21ch'}/>
                {to_log}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Encounter)
