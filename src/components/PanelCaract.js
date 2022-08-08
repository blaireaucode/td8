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

class PanelCaract extends Component {
    render() {
        return (
            <PanelBloc name={'caract'} movable={this.props.movable}>
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
            </PanelBloc>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelCaract)
