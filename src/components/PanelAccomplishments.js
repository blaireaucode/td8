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

class PanelAccomplishments extends Component {
    render() {
        return (
            <PanelBloc name={'acc'} movable={this.props.movable}>
                Accomplissements<br/>
                <C width={'1ch'}/><C width={'7ch'}>Majeur:</C> <InputTxt f={'acc_major'} width={'24ch'}/> <br/>
                <C width={'1ch'}/><C width={'7ch'}>Mineur 1:</C> <InputTxt f={'acc_minor1'} width={'24ch'}/>
                <br/>
                <C width={'1ch'}/><C width={'7ch'}>Mineur 2:</C> <InputTxt f={'acc_minor2'} width={'24ch'}/>
                <br/>
            </PanelBloc>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelAccomplishments)
