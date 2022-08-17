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

class InputTxt extends Component {

    static defaultProps = {
        type: "txt",
        width: 50,
        read_only: false,
        align: 'left',
        mod: 0,
        class_name: 'field_input',
        min:0,
        max:10000
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = ({target}) => {
        let v = target.value;
        if (this.props.type === 'number') {
            v = Math.min(this.props.max, v);
            v = Math.max(this.props.min, v);
        }
        const g = up.update_g_hero(this.props.game, this.props.f, v);
        this.props.set_game(g)
    };

    render() {
        const c = this.props.game.hero;
        const fn = this.props.f;
        let value = c[fn];

        // class name (for style)
        let align = this.props.align;
        let cn = this.props.class_name;
        return (
            <Input className={cn}
                   disableUnderline={true}
                   type={this.props.type}
                   name={fn}
                   value={value}
                   style={{width: this.props.width}}
                   inputProps={{style: {textAlign: align}}}
                   readOnly={this.props.read_only}
                   onChange={this.handleChange}
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputTxt);
