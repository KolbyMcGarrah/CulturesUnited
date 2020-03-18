import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer" style={{textAlign:"center"}}>
                <p className="content">Cultures United FC is proud to participate in the Western Washington Premier League.</p>
                <h6 className="heading is-6">Sponsors</h6>
                <div className="level container">
                    <div className="level-item">
                        <img className="image is-128x128" src="/static/frontend/images/WWPLTransparent.png" />
                    </div>
                    <div className="level-item">
                        <img className="image is-128x128" src="/static/frontend/images/WWPLTransparent.png" />
                    </div>
                    <div className="level-item">
                        <img className="image is-128x128" src="/static/frontend/images/WWPLTransparent.png" />
                    </div>
                </div>
                <h6 className="has-text-size-7">Contact us to become a sponsor.</h6>
            </footer>
        )
    }
}

export default Footer
