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
import InputHero from "./InputHero";
import C from "../helpers/C";
import PanelBloc from "./PanelBloc";
import FH from "../helpers/FH";

class PanelAccomplishments extends Component {
    render() {
        return (
            <PanelBloc name={'acc'} movable={this.props.movable}>
                Accomplissements

                <p/>

                <C width={'1ch'}/><FH w={'8ch'}>Majeur:</FH>
                <InputHero f={'acc_major'} width={'34ch'}/>

                <br/>

                <C width={'1ch'}/><FH w={'8ch'}>Mineur 1:</FH>
                <InputHero f={'acc_minor1'} width={'34ch'}/>

                <br/>

                <C width={'1ch'}/><FH w={'8ch'}>Mineur 2:</FH>
                <InputHero f={'acc_minor2'} width={'34ch'}/>

            </PanelBloc>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelAccomplishments)
