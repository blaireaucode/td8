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
import InputTxt from "../components/InputTxt";
import C from "../helpers/C";
import MoveDiv from "../components/MoveDiv";
import PanelHero from "../components/PanelHero";

const panel_names = ['.hero', '.acc', '.pv', '.caract']

class ScreenHero extends Component {

    render() {
        return (
            <div className="container">
                <PanelHero name={'hero'}>

                    <InputTxt f={'name'} width={'30ch'}/> <br/>

                    <C width={'11ch'}>Age:</C> <InputTxt f={'age'} width={'30ch'}/> <br/>

                    <C width={'11ch'}>Origine:</C> <InputTxt f={'origin'} width={'30ch'}/> <br/>

                    <C width={'11ch'}>Lieu de départ:</C> <InputTxt f={'location'} width={'30ch'}/> <br/>

                    <C width={'11ch'}>Classe:</C> <InputTxt f={'class'} width={'30ch'}/>
                </PanelHero>


                <PanelHero name={'acc'}>
                    Accomplissements<br/>
                    <C width={'1ch'}/><C width={'7ch'}>Majeur:</C> <InputTxt f={'acc_major'} width={'24ch'}/> <br/>
                    <C width={'1ch'}/><C width={'7ch'}>Mineur 1:</C> <InputTxt f={'acc_minor1'} width={'24ch'}/>
                    <br/>
                    <C width={'1ch'}/><C width={'7ch'}>Mineur 2:</C> <InputTxt f={'acc_minor2'} width={'24ch'}/>
                    <br/>
                </PanelHero>


                <PanelHero name={'pv'}>
                    <C width={'12ch'}>Niveau:</C>
                    <InputTxt f={'level'} width={'5ch'} type={'number'}/><br/>

                    <C width={'12ch'}>Réputation:</C>
                    <InputTxt f={'reput'} width={'5ch'} type={'number'}/><br/>

                    <C width={'12ch'}>Points de vie:</C>
                    <InputTxt f={'pv'} width={'5ch'} type={'number'}/>
                    <C width={'2ch'}> / </C>
                    <InputTxt f={'pv_max'} width={'5ch'} type={'number'}/> (max)
                </PanelHero>

                <PanelHero name={'caract'}>
                    <C width={'12ch'}>La robustesse:</C>
                    <InputTxt f={'robustness'} width={'5ch'} type={'number'}/><br/>
                    <C width={'12ch'}>L'adresse:</C>
                    <InputTxt f={'dexterity'} width={'5ch'} type={'number'}/><br/>
                    <C width={'12ch'}>La beauté:</C>
                    <InputTxt f={'beauty'} width={'5ch'} type={'number'}/><br/>
                    <br/>
                    <C width={'12ch'}>La volonté</C>
                    <InputTxt f={'will_power'} width={'5ch'} type={'number'}/><br/>
                    <C width={'12ch'}>L'intelligence</C>
                    <InputTxt f={'intelligence'} width={'5ch'} type={'number'}/><br/>
                    <C width={'12ch'}>L'érudition</C>
                    <InputTxt f={'erudition'} width={'5ch'} type={'number'}/><br/>
                    <C width={'12ch'}>Le charisme</C>
                    <InputTxt f={'charisma'} width={'5ch'} type={'number'}/><br/>

                </PanelHero>


            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHero)
