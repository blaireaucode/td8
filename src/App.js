import './App.css';
import {Provider} from 'react-redux';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Theme from './theme.json';
import store from "./helpers/store";
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ScreenDebug from "./ScreenDebug";
import Nav from "./Nav2";
import ScreenAbout from "./ScreenAbout";


const theme = createTheme(Theme);

const classes = {}


/*
               <Routes>
                        <Route path="/" element={<ScreenDebug/>}/>
                    </Routes>

 */
function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Nav/>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<ScreenDebug/>}/>
                        <Route path="/about" element={<ScreenAbout/>}/>
                    </Routes>
                </div>

            </BrowserRouter>

        </Provider>
    )
        ;
}

export default App;
