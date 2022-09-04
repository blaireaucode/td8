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
import InputRating from "./InputRating";
import PanelLevelDice from "./PanelLevelDice";

class PanelPV extends Component {
    render() {
        return (
            <PanelBloc name={'pv'} movable={this.props.movable}>
                <C width={'10ch'}>Niveau:</C>
                <C width={'20ch'}></C><PanelLevelDice/><br/>
                <InputRating f={'level'} fontSize={8} max={40} smin={1}/>
                <p/>

                <C width={'10ch'}>Points de vie:</C>
                <C width={'1ch'}/>
                <InputHero f={'pv'} width={'5ch'} type={'number'}/>
                <C width={'1ch'}>/</C>
                <InputHero f={'pv_max'} width={'5ch'} type={'number'}/> (max)
                <p/>

                <C width={'10ch'}>Réputation: </C>
                <InputRating f={'reput'} fontSize={8} max={20} min={-20}/>
            </PanelBloc>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelPV)
