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

class EncounterLog extends Component {

    config = {}

    constructor(props) {
        super(props);
        this.config = {
            //toolbar: ['heading', 'bold', 'italic', 'blockQuote'],
            toolbar: [ ],
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
        return (
            <span>
                <FH>Commentaires :</FH>
                <br/>
                <CKEditor
                    className={'ck-encounter'}
                    editor={ClassicEditor}
                    config={this.config}
                    data={this.props.game.encounter.log}
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        editor.setData(this.props.game.encounter.log);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        //console.log('change', {event, editor, data});
                        //const g = update_dic(this.props.game, 'log', data);
                        const g = update(this.props.game, {
                            encounter: {log: {$set: data}}
                        });
                        this.props.set_game(g);
                    }}
                    onBlur={(event, editor) => {
                        //console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        //console.log('Focus.', editor);
                    }}
                />
            </span>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EncounterLog)
