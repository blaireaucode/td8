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
import Moveable from 'react-moveable';
import {update_g_options} from '../helpers/helpers_update';
import update from 'immutability-helper';

const start = 0;
const end = 2500;
const step = 20;
const arrayLength = Math.floor(((end - start) / step)) + 1;
const range = [...Array(arrayLength).keys()].map(x => (x * step) + start);

class MoveDiv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frame: {translate: [0, 0]},
            target: ""
        };
    }

    render() {
        let frame = this.state.frame;
        return (
            <Moveable
                target={this.props.target}
                resizable={false}
                keepRatio={false}
                draggable={this.props.movable}
                throttleDrag={0}

                snappable={true}
                verticalGuidelines={range}
                horizontalGuidelines={range}
                snapThreshold={step}
                snapGap={true}
                /*snapDirections={{"top": true, "right": true, "bottom": true, "left": true}}
                elementSnapDirections={{"top": true, "right": true, "bottom": true, "left": true}}
                snapDigit={0}*/

                edge={false}
                zoom={0}
                origin={false}
                padding={{"left": 0, "top": 0, "right": 0, "bottom": 0}}

                onDragStart={e => {
                    let t = this.props.game.options[this.props.target];
                    if (t === undefined) {
                        t = frame.translate;
                    }
                    e.set(t);
                }}

                onDrag={({target, beforeTranslate}) => {
                    let t = beforeTranslate;
                    // not negative (not in the left bar)
                    if (t[0] < 0) t[0] = 0;
                    if (t[1] < 0) t[1] = 0;
                    target.style.transform = `translate(${t[0]}px, ${t[1]}px)`;
                    target.style.background = "var(--bgm)"; // when move
                }}

                onDragEnd={({lastEvent}) => {
                    if (lastEvent) {
                        frame.translate = lastEvent.beforeTranslate;
                        let target = lastEvent.target;
                        target.style.background = "var(--bge)"; // back
                        // save to ui
                        const options = this.props.game.options;
                        const op2 = update(options, {[this.props.target]: {$set: frame.translate}});
                        const g2 = update_g_options(this.props.game, op2);
                        this.props.set_game(g2);
                    }
                }}

            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoveDiv)
