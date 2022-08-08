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
import PanelHero from "../components/PanelHero";
import L from "../navigation/L";
import default_game from "../helpers/default_game";
import update from "immutability-helper";
import {update_g_options} from "../helpers/helpers_update";

class ScreenHero extends Component {

    constructor(props) {
        super(props);
        this.state = {movable: false};
        this.toggleMove = this.toggleMove.bind(this);
        this.resetPosition = this.resetPosition.bind(this);
    }

    toggleMove() {
        this.setState({movable: !this.state.movable});
    }

    resetPosition() {
        const p = default_game.options;
        let options = {};
        Object.assign(options, this.props.game.options);
        for (let e in p) {
            if (e[0] !== ".") continue;
            options[e] = p[e];
        }
        if (Object.keys(options).length !== 0) {
            const g = update_g_options(this.props.game, options);
            this.props.set_game(g);
        }
    }

    render() {
        const t = [0, 500];
        const styles = {position: "absolute", transform: `translate(${t[0]}px, ${t[1]}px)`};
        let txt = "Déplacer les blocs";
        let txt2 = "Positions d'origine";
        if (this.state.movable) {
            txt = "Déplacements terminés"
            txt2 = "";
        }
        return (
            <div className="container">
                <PanelHero name={'hero'} movable={this.state.movable}>

                    <InputTxt f={'name'} width={'30ch'}/> <br/>

                    <C width={'11ch'}>Age:</C> <InputTxt f={'age'} width={'20ch'}/> <br/>

                    <C width={'11ch'}>Origine:</C> <InputTxt f={'origin'} width={'20ch'}/> <br/>

                    <C width={'11ch'}>Lieu de départ:</C> <InputTxt f={'location'} width={'20ch'}/> <br/>

                    <C width={'11ch'}>Classe:</C> <InputTxt f={'class'} width={'20ch'}/>
                </PanelHero>

                <PanelHero name={'acc'} movable={this.state.movable}>
                    Accomplissements<br/>
                    <C width={'1ch'}/><C width={'7ch'}>Majeur:</C> <InputTxt f={'acc_major'} width={'24ch'}/> <br/>
                    <C width={'1ch'}/><C width={'7ch'}>Mineur 1:</C> <InputTxt f={'acc_minor1'} width={'24ch'}/>
                    <br/>
                    <C width={'1ch'}/><C width={'7ch'}>Mineur 2:</C> <InputTxt f={'acc_minor2'} width={'24ch'}/>
                    <br/>
                </PanelHero>

                <PanelHero name={'pv'} movable={this.state.movable}>
                    <C width={'12ch'}>Niveau:</C>
                    <InputTxt f={'level'} width={'5ch'} type={'number'}/><br/>

                    <C width={'12ch'}>Réputation:</C>
                    <InputTxt f={'reput'} width={'5ch'} type={'number'}/><br/>

                    <C width={'12ch'}>Points de vie:</C>
                    <InputTxt f={'pv'} width={'5ch'} type={'number'}/>
                    <C width={'2ch'}> / </C>
                    <InputTxt f={'pv_max'} width={'5ch'} type={'number'}/> (max)
                </PanelHero>

                <PanelHero name={'caract'} movable={this.state.movable}>
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

                <div style={styles}>
                    <L onClick={this.toggleMove}>{txt}</L> <p/>
                    <L onClick={this.resetPosition}>{txt2}</L>
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHero)
