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
import InputTechnic from "./InputTechnic";
import L from "../navigation/L";
import update from "immutability-helper";

class Technic extends Component {

    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
    }

    remove() {
        const idx = this.props.idx;
        const g = update(this.props.game, {
            hero: {
                technics: {
                    $splice: [[idx,1]]}}});
        this.props.set_game(g)
    }

    render() {
        const idx = this.props.idx;
        return (
            <span>
                <InputTechnic f={'name'} width={'20ch'} idx={idx}/>
                <InputTechnic f={'dice'} width={'4ch'} idx={idx} type={'number'}/>
                <C width={'2ch'}/>
                <InputTechnic f={'combination'} width={'20ch'} idx={idx}/>
                <InputTechnic f={'damage'} width={'4ch'} idx={idx}/>
                <InputTechnic f={'effect'} width={'20ch'} idx={idx}/>
                <L onClick={this.remove}>✗</L>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Technic)
