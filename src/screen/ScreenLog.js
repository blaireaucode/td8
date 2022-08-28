/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import Log from '../components/Log';

class ScreenLog extends Component {

    render() {

        return (
            <div>
                Carnet de campagne<p/>
                <Log/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenLog)
