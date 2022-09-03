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
import update from "immutability-helper";
import InputTxt from "./InputTxt";

class InputTechnic extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange = ({target}) => {
        let v = target.value;
        if (this.props.type === 'number') {
            v = parseInt(target.value);
            if (isNaN(v)) return;
        }
        const idx = this.props.idx;
        const g = update(this.props.game, {
            hero: {
                technics: {
                    [idx]:
                        {[this.props.f]: {$set: v}}
                }
            }
        });
        this.props.set_game(g)
    };

    render() {
        const idx = this.props.idx;
        const t = this.props.game.hero.technics[idx];
        const fn = this.props.f;
        let value = t[fn];
        return <InputTxt {...this.props} onChange={this.onChange} value={value} fn={fn}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTechnic);
