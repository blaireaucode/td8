/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props'
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {update_dic} from "../helpers/helpers_update";
import update from "immutability-helper";
import FH from "../helpers/FH";
import InputEncounter from "./InputEncounter";

class EncounterLog extends Component {

    config = {}

    constructor(props) {
        super(props);
        this.config = {
            //toolbar: ['heading', 'bold', 'italic', 'blockQuote'],
            toolbar: [],
            heading: {
                options: [
                    {model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'},
                    {model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'},
                    {model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'},
                    {model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'}
                ]
            }
        };
    }

    render() {
        const e = this.props.game.encounter;
        let s = 'var(--bge)';
        if (e.pv <= 0) {
            s = 'var(--dead)';
        }
        return (
            <span>
                <FH>Commentaires :</FH>
                <br/>
                <div style={{backgroundColor: s}}>
                <InputEncounter f={'com'} width={'65ch'}/>
                </div>
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EncounterLog)
