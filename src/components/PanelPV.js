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
import InputTxt from "./InputTxt";
import C from "../helpers/C";
import PanelBloc from "./PanelBloc";

class PanelPV extends Component {
    render() {
        return (
            <PanelBloc name={'pv'} movable={this.props.movable}>
                <C width={'12ch'}>Niveau:</C>
                <InputTxt f={'level'} width={'5ch'} type={'number'}/><br/>

                <C width={'12ch'}>Réputation:</C>
                <InputTxt f={'reput'} width={'5ch'} type={'number'}/><br/>

                <C width={'12ch'}>Points de vie:</C>
                <InputTxt f={'pv'} width={'5ch'} type={'number'}/>
                <C width={'2ch'}> / </C>
                <InputTxt f={'pv_max'} width={'5ch'} type={'number'}/> (max)
            </PanelBloc>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelPV)
