/*
 * Copyright 2019
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import React, {Component} from 'react'
import ReactModal from "react-modal"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {connect} from "react-redux"
import Layout from './Layout'
import Debug from './ScreenDebug'
import LayoutBothBar from './LayoutBothBar'
import {mapDispatchToProps, mapStateToProps} from './helpers/default_props';

/*
import DiceRoller from 'components/DiceRoller';
import {close_dice_ui, get_dice_ui} from 'helpers/helpers_dice';
import Character from 'components/ScreenCharacter';
import ScreenRoom from 'components/ScreenDungeon';
import ScreenFight from 'components/ScreenFight';
import ScreenTown from 'components/ScreenTables';
import ScreenSystem from 'components/ScreenGames';
import ScreenAbout from "./components/ScreenAbout";
import ScreenQuest from "./components/ScreenQuest";
import ScreenLog from "./components/ScreenLog";
*/

ReactModal.setAppElement('#root')

const style = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.0)'
    },
    content: {
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '41%',
        height: '40%',
        border: '0px solid #ccc',
        backgroundColor: 'rgba(255, 255, 255, 0.0)',
        background: 'rgba(255, 255, 255, 0.0)',
        //background: '#fff',
        //overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        //borderRadius: '4px',
        outline: 'none',
        //padding: '20px'
    }
}

class AllRoutes extends Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        //const g = close_dice_ui(this.props.game);
        //this.props.set_game(g);
    }

    render() {
        console.log('Public url = ', process.env.PUBLIC_URL);
        //const dice_ui = get_dice_ui(this.props.game);
        //const dice_flag = dice_ui.open;
        const dice_flag = false;
        // {/*<Router basename={process.env.PUBLIC_URL}>*/}
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div>
                    <Routes>
                        <Layout exact path="/" component={Debug}/>
                    </Routes>

                    <ReactModal
                        onRequestClose={this.handleClose}
                        shouldCloseOnOverlayClick={true}
                        isOpen={dice_flag} style={style} close>
                        {/*<DiceRoller/>*/}
                    </ReactModal>
                    {/*<Layout path="/team" component={Team}/>*/}
                    ok after route here
                    {/*
                    <Layout path="/character" component={Character}/>
                    <Layout path="/town" component={ScreenTown}/>
                    <Layout path="/room" component={ScreenRoom}/>
                    <Layout path="/fight" component={ScreenFight}/>
                    <Layout path="/debug" component={Debug}/>
                    <Layout path="/about" component={ScreenAbout}/>
                    <Layout path="/quest" component={ScreenQuest}/>
                    <Layout path="/log" component={ScreenLog}/>
                    <Layout path="/system" component={ScreenSystem}/>
                    <Layout exact path="/" component={ScreenSystem}/>
                    */}
                </div>
            </Router>
        );
    }
}

//export default AllRoutes;
export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes)

