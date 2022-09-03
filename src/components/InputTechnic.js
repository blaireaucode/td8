/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Input from '@mui/material/Input';
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import * as up from '../helpers/helpers_update';
import update from "immutability-helper";
import InputTxt from "./InputTxt";
import InputTxt2 from "./InputTxt2";

class InputTechnic extends Component {

    constructor(props) {
        super(props);
        console.log('technic def props', this.props)
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = ({target}) => {
        console.log('handle')
        let v = target.value;
        if (this.props.type === 'number') {
            v = Math.min(this.props.max, v);
            v = Math.max(this.props.min, v);
        }
        const idx = this.props.idx;
        const g = update(this.props.game,
            {
                hero: {
                    technics: {
                        [idx]:
                            {[this.props.f]: {$set: v}}
                    }
                }
            });
        console.log('g', g)
        this.props.set_game(g)
    };

    render() {
        console.log('inputT', this.props);
        const idx = this.props.idx;
        const t = this.props.game.hero.technics[idx];
        const fn = this.props.f;
        let value = t[fn];
        //return this.render_input(fn, value);
        return <InputTxt2 {...this.props} onChange={this.handleChange} value={value} fn={fn}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTechnic);
