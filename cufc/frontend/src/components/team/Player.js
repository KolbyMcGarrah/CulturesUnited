import React, { Component } from 'react'
import PropTypes from "prop-types";

export class Player extends Component {
    static propTypes = {
        player: PropTypes.object.isRequired,
    }
    render(){
        return (
        <div className="container box">
            <article className="media">
                    <figure className="media-left">
                        <img className="image is-128x128" src={this.props.player.image}/>
                    </figure>
                    <div className="media-content columns">
                        <div className="column is-2 is-offset-1">
                            <strong className="is-size-6">{this.props.player.name}</strong>
                            <h3 className="is-size-6">Age: <span className="has-text-weight-light" >{this.props.player.age}</span></h3>
                            <h3 className="is-size-6">Position: <span className="has-text-weight-light">{this.props.player.position}</span></h3>
                            <h3 className="is-size-6">Appearances: <span className="has-text-weight-light">{this.props.player.appearances}</span></h3>
                            <h3 className="is-size-6">Goals: <span className="has-text-weight-light">{this.props.player.goals}</span></h3>
                            <h3 className="is-size-6">Assists: <span className="has-text-weight-light">{this.props.player.assists}</span></h3>
                        </div>
                        <div className="column">
                            <h3 className="is-size-6 ">Description: </h3>
                            <p className="has-text-weight-light" style={{wordWrap:"break-word"}}>{this.props.player.description}</p>
                        </div>
                    </div>
                    
            </article>
        </div>
    )
    }
}

export default Player