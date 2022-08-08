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

class PanelHero extends Component {
    render() {
        return (
            <PanelBloc name={'hero'} movable={this.props.movable}>
                <InputTxt f={'name'} width={'30ch'}/> <br/>

                <C width={'11ch'}>Age:</C> <InputTxt f={'age'} width={'20ch'}/> <br/>

                <C width={'11ch'}>Origine:</C> <InputTxt f={'origin'} width={'20ch'}/> <br/>

                <C width={'11ch'}>Lieu de départ:</C> <InputTxt f={'location'} width={'20ch'}/> <br/>

                <C width={'11ch'}>Classe:</C> <InputTxt f={'class'} width={'20ch'}/>
            </PanelBloc>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelHero)
