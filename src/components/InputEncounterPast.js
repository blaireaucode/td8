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
import update from "immutability-helper";

class InputEncounter extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    static defaultProps = {
        min: 0,
        max: 10000,
        type: "txt",
        nb: -1
    }

    onChange = ({target}) => {
        let v = target.value;
        if (this.props.type === 'number') {
            v = Math.min(this.props.max, v);
            v = Math.max(this.props.min, v);
        }
        const nb = this.props.e.nb;
        console.log('nb', nb, this.props.e, this.props.game.past_encounters)
        const g = update(this.props.game,
            {
                past_encounters: {
                    [nb]: {[this.props.f]: {$set: v}}
                }
            });
        console.log('g', g.past_encounters)
        this.props.set_game(g)
    };

    render() {
        const e = this.props.e;
        console.log('eee', e)
        const fn = this.props.f;
        let value = e[fn];
        return <InputTxt {...this.props} onChange={this.onChange} value={value} fn={fn}/>
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(InputEncounter);
