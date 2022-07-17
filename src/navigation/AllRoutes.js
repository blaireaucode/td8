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

class AllRoutes extends Component {

    render() {
        return (
            <Routes>
                <Route path="/" element={<ScreenDebug/>}/>
                <Route path="/about" element={<ScreenAbout/>}/>
                <Route path="/debug" element={<ScreenDebug/>}/>
            </Routes>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes)
