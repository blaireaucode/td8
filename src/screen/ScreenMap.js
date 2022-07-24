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

class ScreenMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: {
                scale: 1,
                translation: {x: 0, y: 0}
            }
        };
    }

    render() {
        const {scale, translation} = this.state;
        // FIXME keep those values in the store
        // FIXME reset button
        // console.log('state', this.state)
        return (
            <MapInteractionCSS
                value={this.state.value}
                onChange={(value) => this.setState({value})}>
                <img src='/images/map_72ppi.png'/>
            </MapInteractionCSS>
        )
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenMap)
