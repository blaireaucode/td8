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
import L from "../navigation/L";
import update from "immutability-helper";
import {default_technic} from "../helpers/default_game";
import {v4 as uuidv4} from "uuid";
import Technic from "./Technic";

class PanelTechnics extends Component {

    constructor(props) {
        super(props);
        this.addTechnic = this.addTechnic.bind(this);
    }

    addTechnic() {
        let d = JSON.parse(JSON.stringify(default_technic));
        d.id = uuidv4();
        const g = update(this.props.game, {hero: {technics: {$push: [d]}}});
        console.log('d', d)
        this.props.set_game(g);
    }

    render() {
        const technics = this.props.game.hero.technics;
        console.log('technics', technics)
        let tech = [];
        for (let t in technics) {
            tech.push(<span><Technic idx={t}/><br/></span>);
        }
        return (
            <PanelBloc name={'technic'} movable={this.props.movable}>
                Techniques de combat <p/>

                <L onClick={this.addTechnic}>Add</L> <p/>

                {tech}

            </PanelBloc>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelTechnics)
