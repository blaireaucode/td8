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
import MoveDiv from "./MoveDiv";


class PanelHero extends Component {

    render() {
        const name = this.props.name;
        const dname = '.' + name;
        console.log('PanelHero', name, dname);
        let t = this.props.game.options[dname];
        console.log('t', t);
        if (t === undefined) {
            t = [0, 0];
        }
        const styles = {transform: `translate(${t[0]}px, ${t[1]}px)`};
        return (
            <div>
                <div className={"movable " + name} style={styles}>
                    {this.props.children}
                </div>
                <MoveDiv target={dname}/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelHero)
