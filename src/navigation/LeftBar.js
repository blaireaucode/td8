/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import L from "./L";

class LeftBar extends Component {


    render() {
        return (
            <div id="sidebar">
                <div className="vl"/>
                <L to={'/map'}>Carte</L><p/>
                <L to={'/hero'}>Personnage</L><p/>
                <L to={'/games'}>Sauvegarde</L><p/>
                <L to={'/about'}>A propos</L><p/>
                <L to={'/debug'}>Debug</L><p/>
            </div>
        );
    }
}

export default LeftBar;