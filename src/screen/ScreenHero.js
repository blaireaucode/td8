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
import L from "../navigation/L";
import default_game from "../helpers/default_game";
import {update_g_options} from "../helpers/helpers_update";
import PanelHero from "../components/PanelHero";
import PanelAccomplishments from "../components/PanelAccomplishments";
import PanelPV from "../components/PanelPV";
import PanelCaract from "../components/PanelCaract";
import PanelTechnics from "../components/PanelTechnics";

class ScreenHero extends Component {

    constructor(props) {
        super(props);
        this.state = {movable: false};
        this.toggleMove = this.toggleMove.bind(this);
        this.resetPosition = this.resetPosition.bind(this);
    }

    toggleMove() {
        this.setState({movable: !this.state.movable});
        if (this.state.movable) {
            for (let e in this.props.game.options) {
                if (e[0] !== ".") continue;
                console.log('e', e, this.props.game.options[e]);
            }
        }
    }

    resetPosition() {
        const p = default_game.options;
        let options = {};
        Object.assign(options, this.props.game.options);
        for (let e in p) {
            if (e[0] !== ".") continue;
            options[e] = p[e];
        }
        if (Object.keys(options).length !== 0) {
            const g = update_g_options(this.props.game, options);
            this.props.set_game(g);
        }
    }

    render() {
        const t = [0,700];
        const styles = {position: "absolute", transform: `translate(${t[0]}px, ${t[1]}px)`};
        let txt = "Déplacer les blocs";
        let txt2 = "Positions d'origine";
        if (this.state.movable) {
            txt = "Déplacements terminés"
            txt2 = "";
        }
        return (
            <div className="container">

                <PanelHero movable={this.state.movable}/>

                <PanelAccomplishments movable={this.state.movable}/>

                <PanelPV movable={this.state.movable}/>

                <PanelCaract movable={this.state.movable}/>

                <PanelTechnics movable={this.state.movable}/>

                <div style={styles}>
                    <L onClick={this.toggleMove}>{txt}</L> <C width={'3ch'}/>
                    <L onClick={this.resetPosition}>{txt2}</L>
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHero)
