import React, { Component, Fragment } from 'react'

export class Goals extends Component {
    render() {
        return (
            <div className="section" style={{textAlign:"center"}}>
                <h1 className="title is-1">Our Values</h1>
                <div className="columns">
                    <div className="column is-4">
                        <div>
                        <span className="icon has-text-info">
                            <i className="fas fa-5x fa-hands-helping"></i>
                        </span>
                        <p className="title">Community</p>
                        <p className="heading">Community was a funny show with Childish Gambino.<br/>I have a community.</p>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div>
                        <span className="icon has-text-warning">
                            <i className="fas fa-5x fa-user-graduate"></i>
                        </span>
                        <p className="title">Leadership</p>
                        <p className="heading">Prepare athletes to be culturally sensitive leaders in the community.</p>
                        </div>
                    </div>
                    <div className="column is-4">
                        <div>
                        <span className="icon has-text-info">
                            <i className="fas fa-5x fa-globe-americas"></i>
                        </span>
                        <p className="title">Diversity</p>
                        <p className="heading">Things and stuff about diversity. <br/> Diversity rhymes with da university.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Goals
