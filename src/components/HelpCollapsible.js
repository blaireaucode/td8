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
import {Collapse} from 'react-collapse';
import L from "../navigation/L";

class CollapsibleHelp extends Component {

    static defaultProps = {
        text: "(?)",
        //className: 'help-right'
        className: ''
    }

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        const v = !this.state.open;
        this.setState({open: v});
    }

    render() {
        return (
            <span>
                <span className={this.props.className}>
                    <L onClick={this.toggle}>{this.props.text}</L>
                </span>
                <Collapse isOpened={this.state.open}>
                    <span className={'help'}>
                        {this.props.children}
                    </span>
                </Collapse>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CollapsibleHelp);
