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

class ScreenAbout extends Component {

    render() {

        return (
            <div>
                I am in about screen
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenAbout)
