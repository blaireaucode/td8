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

class PanelCaract extends Component {
    render() {
        return (
            <PanelBloc name={'caract'} movable={this.props.movable}>
                <C width={'12ch'}>La robustesse:</C>

                <InputRating f={'robustness'}/>

                <C width={'12ch'}>L'adresse:</C>
                <InputRating f={'dexterity'}/><br/>

                <C width={'12ch'}>La beauté:</C>
                <InputRating f={'beauty'}/><br/>

                <br/>

                <C width={'12ch'}>La volonté</C>
                <InputRating f={'will_power'}/><br/>

                <C width={'12ch'}>L'intelligence</C>
                <InputRating f={'intelligence'}/><br/>

                <C width={'12ch'}>L'érudition</C>
                <InputRating f={'erudition'}/><br/>

                <C width={'12ch'}>Le charisme</C>
                <InputRating f={'charisma'}/><br/>
            </PanelBloc>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelCaract)
