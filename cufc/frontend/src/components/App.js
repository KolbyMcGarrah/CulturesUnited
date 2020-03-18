import ReactDom from 'react-dom';
import React, { Component } from 'react'
import Home from './layout/Home';
import TeamPageAll from './team/TeamPageAll';
import TopBanner from './layout/TopBanner';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Footer from "./layout/Footer";
import EmailList from "./News/EmailList"

class App extends Component {
    render() {
        return (
            <Router>
                <TopBanner />
                <Switch>
                    <Route exact path='/team' component={TeamPageAll} />
                    <Route exact path='/' component={Home} />
                </Switch>
                <Footer />
            </Router>
        )
    }
}
ReactDom.render(<App />, document.getElementById('app'))

