import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class OtherNave extends Component {
    render() {
        return (
            <nav className="level">
              <p className="level-item has-text-centered">
                <Link to="/team" className="link is-info has-text-white">Team</Link>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info has-text-white">Shop</a>
              </p>
              <p className="level-item has-text-centered">
                <Link to="/">
                  <img src="/static/frontend/images/cultureUnitedSimple.svg" style={{height: "80px"}}/>
                </Link>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info has-text-white">About</a>
              </p>
              <p className="level-item has-text-centered">
                <a className="link is-info has-text-white">Contact</a>
              </p>
            </nav>
        )
    }
}

export default OtherNave


