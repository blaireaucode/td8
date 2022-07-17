/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import './App.css';
import {Provider} from 'react-redux';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Theme from './theme.json';
import store from "./helpers/store";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import NavigationBar from "./navigation/NavigationBar";
import AllRoutes from "./AllRoutes";


const theme = createTheme(Theme);

const classes = {}

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavigationBar/>
                <div className="App">
                    <AllRoutes/>
                </div>

            </BrowserRouter>

        </Provider>
    )
        ;
}

export default App;
