/*
 * Copyright 2022
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import './App.css';
import {Provider} from 'react-redux';
import {createTheme} from '@mui/material/styles';
import Theme from './theme.json';
import store from "./helpers/store";
import {BrowserRouter} from 'react-router-dom';
import NavigationBar from "./navigation/NavigationBar";
import AllRoutes from "./navigation/AllRoutes";

const theme = createTheme(Theme); //FIXME later
const classes = {}; // FIXME later

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
    );
}

export default App;
