import React, { Component } from 'react'

export class Header extends Component { 
    render() {
        const logoSrc = "frontend/images/unnamed.jpg"
        return (
            <nav class="navbar is-fixed-top is-primary">
                <div class="navbar-brand">
                    <div class="navbar-item">
                            <img src="/static/frontend/images/cultureUnitedSimple.svg"/>
                    </div>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <button className="button is-text is-small">Team</button>
                            <button className="button is-text is-small">Community</button>
                            <button className="button is-text is-small">About</button>
                            <button className="button is-text is-small">Shop</button>
                            <button className="button is-warning is-small">Support</button>
                        </div>
                    </div>
                </div>               
            </nav>
        )
    }
}

export default Header
