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
import SquareIcon from '@mui/icons-material/Square';
//import CircleIcon from '@mui/icons-material/Circle';
import {Rating} from "@mui/material";
import * as up from "../helpers/helpers_update";

const Icon = SquareIcon;

//const Icon = CircleIcon;

class MyIcon extends Component {

    render() {
        const max = this.props.max - this.props.min;
        const min_opacity = 0.3;
        let op = min_opacity + (1 - min_opacity) / max * (this.props.value - this.props.min);
        //if (this.props.hover !== '') op = 1;
        return (<Icon sx={{fontSize: this.props.fontSize}} style={{opacity: op, color: "var(--fgl)"}}/>);
    }
}

class InputRating extends Component {

    static defaultProps = {
        max: 20,
        fontSize: 10,
        min: 0,
        smin: 0
    }

    constructor(props) {
        super(props);
        this.state = {hoverValue: ''};
        this.i = 0;
    }

    render() {
        const c = this.props.game.hero;
        const fn = this.props.f;
        const value = c[fn];
        return (
            <span>
                <Rating
                    name="hover-feedback"
                    value={value - this.props.min}
                    precision={1}
                    max={this.props.max - this.props.min}
                    onChange={(event, newValue) => {
                        let v = newValue + this.props.min;
                        const g = up.update_g_hero(this.props.game, fn, v);
                        this.props.set_game(g);
                        this.setState({hoverValue: ''});
                    }}
                    icon={<MyIcon value={value} hover={this.state.hoverValue}{...this.props}/>}
                    onChangeActive={(event, newHover) => {
                        let a = newHover + this.props.min;
                        if (a < this.props.min || a > this.props.max) a = '';
                        this.setState({hoverValue: a});
                    }}

                    emptyIcon={
                        <Icon sx={{fontSize: this.props.fontSize}} style={{opacity: 0.9, color: "var(--bgm)"}}/>}

                />
                <C width={'1ch'}/>
                <InputHero f={fn} width={'5ch'} type={'number'} min={this.props.min + this.props.smin}
                          max={this.props.max}/>
                <span style={{fontSize: '0.9rem', color: 'var(--fgl)'}}>{this.state.hoverValue}</span>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputRating)
