import React, { Component } from 'react'
import axios from 'axios';
import Player from './Player'

export class DisplayPlayers extends Component {
    state = {
        players:[]
    }
    componentDidMount(){
        axios.get("api/players/")
        .then(res => {
            const players = res.data
            this.setState({players})
        })
    }
    render() {
        return (
            <section className="section container">
                    <h1 className="title is-1">Players</h1>
                    {
                        this.state.players.map(player =>(
                            <Player key={player.id} player={player}/>
                        ))
                    }
            </section>
        )
    }
}

export default DisplayPlayers
