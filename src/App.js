import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import AllRoutes from './AllRoutes';
import Theme from './theme.json';
import store from "./helpers/store";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ScreenDebug from "./ScreenDebug";
import Layout from "./Layout";
import LayoutBothBar from "./LayoutBothBar";
import {slide as Menu} from 'react-burger-menu'
import Nav from "./Nav2";


const theme = createTheme(Theme);

const classes = {}


function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav/>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<ScreenDebug/>}/>
                    </Routes>
                </div>

            </BrowserRouter>

        </Provider>
    )
        ;
}

export default App;
