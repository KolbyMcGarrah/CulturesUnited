import React, { Component } from 'react'
import DisplayCoaches from "./DisplayCoaches";
import DisplayPlayers from "./DisplayPlayers";
import DispalyStaff from './DisplayStaff';

export class TeamPageAll extends Component {
    render() {
        return (
            <section className="section">
                <div style={{textAlign:'center'}}>
                    <h1 className="title">Cultures United Team</h1>
                    <h4 className="subtitle">Placeholder text to say something inspiring about being on the team</h4>
                </div>
                <DisplayPlayers />
                <DisplayCoaches />
                <DispalyStaff />
            </section>
        )
    }
}

export default TeamPageAll
