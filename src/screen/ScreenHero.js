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
import InputTxt from "../components/InputTxt";
import C from "../helpers/C";

class ScreenHero extends Component {

    render() {
        const h = this.props.game.hero;
        return (
            <div>

                <C width={'6ch'}>Nom:</C> <InputTxt f={'name'} width={'30ch'}/> <br/>

                <C width={'6ch'}>Age:</C> <InputTxt f={'age'} width={'30ch'}/> <br/>

                <C width={'6ch'}>Origine:</C> <InputTxt f={'origin'} width={'30ch'}/> <br/>

                <C width={'6ch'}>Lieu:</C> <InputTxt f={'location'} width={'30ch'}/> <br/>

                <C width={'6ch'}>Classe:</C> <InputTxt f={'class'} width={'30ch'}/> <p/>

                Accomplissement<br/>
                <C width={'4ch'}/><C width={'8ch'}>majeur:</C> <InputTxt f={'acc_major'} width={'50ch'}/> <br/>
                <C width={'4ch'}/><C width={'8ch'}>mineur 1:</C> <InputTxt f={'acc_minor1'} width={'50ch'}/> <br/>
                <C width={'4ch'}/><C width={'8ch'}>mineur 2:</C> <InputTxt f={'acc_minor2'} width={'50ch'}/> <br/>



            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHero)
