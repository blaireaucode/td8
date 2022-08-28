/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom';
import {connect} from "react-redux";
import {mapDispatchToProps, mapStateToProps} from '../helpers/default_props';
import ScreenDebug from "../screen/ScreenDebug";
import ScreenAbout from "../screen/ScreenAbout";
import ScreenHero from "../screen/ScreenHero";
import ScreenMap from "../screen/ScreenMap";
import ScreenGames from "../screen/ScreenGames";
import ScreenResetStore from "../screen/ScreenResetStore";
import ScreenDices from "../screen/ScreenDices";
import ScreenLog from "../screen/ScreenLog";

class AllRoutes extends Component {

    render() {
        return (
            <Routes>
                <Route path="/" element={<ScreenHero/>}/>
                <Route path="/hero" element={<ScreenHero/>}/>
                <Route path="/map" element={<ScreenMap/>}/>
                <Route path="/games" element={<ScreenGames/>}/>
                <Route path="/about" element={<ScreenAbout/>}/>
                <Route path="/debug" element={<ScreenDebug/>}/>
                <Route path="/dices" element={<ScreenDices/>}/>
                <Route path="/log" element={<ScreenLog/>}/>
                <Route path="/resetStore" element={<ScreenResetStore/>}/>
            </Routes>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes)

