import React, { Component } from 'react'
import OtherNave from './OtherNave';

export class TopBanner extends Component {
    render() {
        const imgStyle ={
            maxHeight:'300px',
            overflow:'hidden'
        }
        return (
            <div className="hero is-info">
                <div className="container">
                    <div className="hero-header">
                        <OtherNave />
                    </div>
                    <div className="section" style={{textAlign:"center"}}>    
                            <h1 className="title is-1">Uniting Cultures Through Football</h1>
                            <h3 className="subtitle is-4">Placeholder text for whatever you want to say</h3>
                            <button className='button is-primary'>Support Our Cause</button>                           
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBanner
