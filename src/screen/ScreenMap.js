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
import {
    TransformComponent,
    TransformWrapper,
} from "@pronestor/react-zoom-pan-pinch";
import {MapInteractionCSS} from 'react-map-interaction';


class ScreenMap extends Component {

    constructor(props) {
        super(props);
        //this.state = {initial_scale: 1};
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
        // console.log('state', this.state)
        return (
            <MapInteractionCSS
                value={this.state.value}
                onChange={(value) => this.setState({value})}>
                <img src='/images/map_72ppi.png'/>
            </MapInteractionCSS>
        )
    }

    render2() {
        return (
            <div><TransformWrapper>
                <TransformComponent>
                    <img className={'map_image'}
                         src={'/images/map_72ppi.png'}
                         alt={'map'}
                         width={'100%'}
                         align={'top'}
                         onMouseOver={this.over}
                         onMouseOut={this.leave}
                         border={0}
                    />
                </TransformComponent>
            </TransformWrapper>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenMap)
