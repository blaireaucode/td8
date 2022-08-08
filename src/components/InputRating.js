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
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {Rating} from "@mui/material";
import * as up from "../helpers/helpers_update";

class InputRating extends Component {

    constructor(props) {
        super(props);
        this.state = {a: ''};
    }

    render() {
        const c = this.props.game.hero;
        const fn = this.props.f;
        const value = c[fn];
        return (
            <span>
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={1}
                    max={20}
                    onChange={(event, newValue) => {
                        const g = up.update_g_hero(this.props.game, fn, newValue);
                        this.props.set_game(g)
                    }}
                    icon={
                        <CheckBoxOutlineBlankIcon sx={{fontSize: 10}} style={{opacity: 0.9, color: "var(--fgl)"}}/>
                    }
                    onChangeActive={(event, newHover) => {
                        let a = newHover;
                        if (a < 0 || a > 20) a = '';
                        this.setState({a: a});
                    }}
                    emptyIcon={
                        <CheckBoxOutlineBlankIcon sx={{fontSize: 10}} style={{opacity: 0.9, color: "var(--bgm)"}}/>}
                />
                <C width={'1ch'}/>
                <InputTxt f={fn} width={'5ch'} type={'number'}/>
                <span style={{fontSize: '0.9rem', color:'var(--bgm)'}}>{this.state.a}</span>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputRating)
