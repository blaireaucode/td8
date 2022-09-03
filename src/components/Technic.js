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
import C from "../helpers/C";
import PanelBloc from "./PanelBloc";
import InputRating from "./InputRating";
import L from "../navigation/L";
import update from "immutability-helper";
import {default_technic} from "../helpers/default_game";
import {v4 as uuidv4} from "uuid";
import InputTxt from "./InputTxt";
import InputTechnic from "./InputTechnic";
import InputHero from "./InputHero";

class Technic extends Component {

    constructor(props) {
        super(props);
        this.addTechnic = this.addTechnic.bind(this);
    }

    addTechnic() {

    }

    render() {
        const idx = this.props.idx;
        const t = this.props.game.hero.technics[idx];
        console.log('t', idx, t);
        return (
            <span>
                <InputTechnic f={'name'} width={'20ch'} idx={idx}/>

                <C width={'4ch'}> {t.dice}</C>
                <C width={'10ch'}> {t.combination}</C>
                <C width={'4ch'}> {t.damage}</C>
                <C width={'10ch'}> {t.effect}</C>

            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Technic)
