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
import {Checkbox, FormControlLabel} from "@mui/material";

class OneDiceResult extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        console.log('eve', event)
    }

    render() {
        const dice = this.props.dice;
        console.log('dice', dice);

        return (
            <span>
                <FormControlLabel
                    control={<Checkbox onChange={this.onChange} label={dice.value}/>} label={dice.value}/>
                <C width={'3ch'}/>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneDiceResult)
