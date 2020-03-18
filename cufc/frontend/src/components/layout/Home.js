import React, { Component, Fragment } from 'react';
import News, { DisplayNews } from "../News/DisplayNews"
import WhoAreWe from "./WhoAreWe"
import Goals from "./Goals"

export class Home extends Component {
    render() {
        return (
            <Fragment>
                <WhoAreWe />
                <Goals />
                <DisplayNews />
            </Fragment>
        )
    }
}

export default Home
