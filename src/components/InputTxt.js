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

class InputTxt extends Component {

    static defaultProps = {
        type: "txt",
        width: 50,
        read_only: false,
        align: 'left',
        mod: 0,
        class_name: 'field_input',
        min: 0,
        max: 10000,
    }

    render() {
        const align = this.props.align;
        const cn = this.props.class_name;
        const fn = this.props.fn;
        const value = this.props.value;
        return (
            <Input className={cn}
                   disableUnderline={true}
                   type={this.props.type}
                   name={fn}
                   value={value}
                   style={{width: this.props.width}}
                   inputProps={{style: {textAlign: align}}}
                   readOnly={this.props.read_only}
                   onChange={this.props.onChange}
            />
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(InputTxt);
