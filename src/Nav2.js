import React, {Component} from 'react';
import L from "./helpers/L";

class Nav extends Component {


    render() {
        return (
            <div>
                <div id="topbar">
                    toto
                </div>
                <div id="sidebar">
                    okokok<p/>
                    menu2<p/>
                    <L to={'/about'}>about</L>
                </div>
            </div>
        );
    }
}

export default Nav;