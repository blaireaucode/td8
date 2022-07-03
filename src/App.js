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


const theme = createTheme(Theme);


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                {/*<ThemeProvider theme={theme}>*/}
                {/*<Routes/>*/}
                {/*</ThemeProvider>*/}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ScreenDebug/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    )
        ;
}

export default App;
