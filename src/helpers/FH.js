/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from './default_props';

class FH extends Component {

    static defaultProps = {
        w: '20ch',
        className: 'field_header'
    }

    render() {
        return (
            <span style={{display: 'inline-block', width: this.props.w}}
                  className={this.props.className}>
                {this.props.children}
            </span>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(FH)
