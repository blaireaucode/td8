/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props'
import {MapInteractionCSS} from 'react-map-interaction';
import update from "immutability-helper";
import {update_g_options} from "../helpers/helpers_update";

class ScreenMap extends Component {

    constructor(props) {
        super(props);

        const v = this.props.game.options.map;
        if (v === undefined) {
            this.state = {
                value: {
                    scale: 1,
                    translation: {x: 0, y: 0}
                }
            };
        } else {
            this.state = {value: this.props.game.options.map};
        }
        this.onMapChange = this.onMapChange.bind(this)
    }

    onMapChange(value) {
        const options = this.props.game.options;
        const op2 = update(options, {map: {$set: value}});
        const g2 = update_g_options(this.props.game, op2);
        this.props.set_game(g2);
        this.setState({value});
    }

    render() {
        return (
            <MapInteractionCSS
                value={this.state.value}
                onChange={(value) => this.onMapChange(value)}>
                <img src='/images/map_72ppi.png' alt={"map"}/>
            </MapInteractionCSS>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenMap)
