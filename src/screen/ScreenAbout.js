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
import C from "../helpers/C";

class ScreenAbout extends Component {

    render() {

        return (
            <div>
                Aide de jeu pour "La Terre des Huit"
                <p/> <C width={'3ch'}/>
                <img src='/images/couverture.jpeg' alt={"map"} width={'800px'}/>
                <p/> <C width={'3ch'}/>
                <p/>
                Tous les concepts, idées, illustrations sont la propriété de Etrigane :
                <p/>
                Chaine youtube: <a href={"https://www.youtube.com/user/evasowana"}>https://www.youtube.com/user/evasowana</a>

                <p/>

                Facebook: <a href={"https://www.facebook.com/groups/5787231254626961"}>https://www.facebook.com/groups/5787231254626961</a>



                <p/> <C width={'3ch'}/>
                <p/> <C width={'3ch'}/>
                <p/>
                Code source : <a href={"https://github.com/blaireaucode/td8"}>https://github.com/blaireaucode/td8</a>
                <p/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScreenAbout)
