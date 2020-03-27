import React, { Component } from 'react'
import PropTypes from "prop-types";

export class Coach extends Component {
    static propTypes = {
        coach: PropTypes.object.isRequired,
    }
    render(){
        return (
        <div className="container box">
            <article className="media">
                    <figure className="media-left">
                        <img className="image is-128x128" src={this.props.coach.image}/>
                    </figure>
                    <div className="media-content">
                            <strong className="title is-size-6">{this.props.coach.name}</strong>
                            <h4 className="has-text-weight-light is-size-6">{this.props.coach.title}</h4>
                            <h3 className="is-size-6">Home: <span className="has-text-weight-light" >{this.props.coach.home}</span></h3>
                            <h3 className="is-size-6 ">Description: </h3>
                            <p className="has-text-weight-semi-bold" style={{wordWrap:"break-word"}}>{this.props.coach.description}</p>
                    </div>
                    
            </article>
        </div>
    )
    }
}

export default Coach