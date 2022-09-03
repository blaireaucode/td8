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
import * as up from '../helpers/helpers_update';
import InputTxt from "./InputTxt";

class InputHero extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange = ({target}) => {
        let v = target.value;
        if (this.props.type === 'number') {
            v = Math.min(this.props.max, v);
            v = Math.max(this.props.min, v);
        }
        const g = up.update_g_hero(this.props.game, this.props.f, v);
        this.props.set_game(g)
    };

    render() {
        let c = this.props.game.hero;
        const fn = this.props.f;
        let value = c[fn];
        return <InputTxt {...this.props} onChange={this.onChange} value={value} fn={fn}/>
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(InputHero);
