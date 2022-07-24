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

class ScreenHero extends Component {

    render() {
        const h = this.props.game.hero;
        return (
            <div>
                I am in hero screen {h.name}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHero)
