import React, { Component } from 'react';
import axios from "axios";

export class DisplayInstaPosts extends Component {
    componentDidMount(){
        axios
        .get("https://www.instagram.com/culturesunitedfc/")
        .then( res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        )
    }
}

export default DisplayInstaPosts
